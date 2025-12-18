/**
 * Location Capture Script
 * 
 * This script captures user location information using IP-based geolocation services
 * and adds it to forms for tracking purposes.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Target all forms that need location data
    const targetForms = [
        'contact_form',
        'newsletter_form', 
        'careers-form',
        'enquire_form'
    ];

    // Initialize location capture
    initLocationCapture(targetForms);
});

/**
 * Initialize location capture for the specified forms
 * @param {Array} formIds - Array of form IDs to add location data to
 */
function initLocationCapture(formIds) {
    //console.log("Location capture initialized for forms:", formIds);
    
    // Clear any cached data
    sessionStorage.removeItem('locationData');
    
    // Try all available geolocation services in sequence for best accuracy
    tryAllGeolocationServices()
        .then(locationData => {
            //console.log("Final location data being used:", locationData);
            
            // Store the current IP to detect changes
            sessionStorage.setItem('lastIP', locationData.ip_address);
            
            // Add the IP-based data to forms
            addLocationDataToForms(formIds, locationData);
        })
        .catch(error => {
            //console.log("Error getting location: " + error);
            
            // If all geolocation services fail, use fallback with just IP
            getFallbackIpOnly()
                .then(ipOnly => {
                    //console.log("Using fallback IP-only data:", ipOnly);
                    addLocationDataToForms(formIds, ipOnly);
                })
                .catch(fallbackError => {
                    //console.log("Even fallback failed:", fallbackError);
                    // Use empty data as last resort
                    const emptyData = {
                        ip_address: '',
                        city: '',
                        region: '',
                        country_code: '',
                        latitude: '',
                        longitude: ''
                    };
                    addLocationDataToForms(formIds, emptyData);
                });
        });
}

/**
 * Try all available geolocation services in sequence for best accuracy
 * @returns {Promise} Promise resolving to the most accurate location data
 */
function tryAllGeolocationServices() {
    return new Promise((resolve, reject) => {
        // First try get the IP address
        getFallbackIpOnly()
            .then(ipData => {
                //console.log("Got IP address:", ipData.ip_address);
                
                // These are the services to try, in order of preference
                const services = [
                    getIPAPIData,          // Most reliable especially for India
                    getGeoJSData,          // Good alternative
                    getIPInfoData          // Third option
                ];
                
                // Try each service in sequence
                tryNextService(0);
                
                function tryNextService(index) {
                    if (index >= services.length) {
                        reject(new Error("All geolocation services failed"));
                        return;
                    }
                    
                    //console.log(`Trying geolocation service #${index + 1} with IP: ${ipData.ip_address}`);
                    services[index](ipData.ip_address)
                        .then(locationData => {
                            // Validate the data to ensure it's usable
                            if (isValidLocationData(locationData)) {
                                //console.log(`Using data from service #${index + 1}:`, locationData);
                                resolve(locationData);
                            } else {
                                //console.log(`Service #${index + 1} returned incomplete data, trying next`);
                                tryNextService(index + 1);
                            }
                        })
                        .catch(error => {
                            //console.log(`Service #${index + 1} failed:`, error.message);
                            tryNextService(index + 1);
                        });
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * Check if location data is valid and usable
 * @param {Object} data - Location data to validate
 * @returns {boolean} True if data is valid
 */
function isValidLocationData(data) {
    // Basic validation
    if (!data || !data.ip_address) return false;
    
    // Check if we have at least some location data
    const hasBasicLocation = data.city || data.region || data.country_code;
    if (!hasBasicLocation) return false;
    
    // Validate coordinates if present
    if (data.latitude && data.longitude) {
        const lat = parseFloat(data.latitude);
        const lng = parseFloat(data.longitude);
        
        // Check if coordinates are within valid ranges
        if (isNaN(lat) || isNaN(lng) || 
            lat < -90 || lat > 90 || 
            lng < -180 || lng > 180) {
            return false;
        }
    }
    
    return true;
}

/**
 * Get location data from ipinfo.io
 * @param {string} ip - IP address to look up
 * @returns {Promise} Promise resolving to location data
 */
function getIPInfoData(ip) {
    return new Promise((resolve, reject) => {
        fetch(`https://ipinfo.io/${ip}/json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('IPInfo: Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                //console.log("IPInfo data:", data);
                
                // Parse latitude and longitude from loc (format: "lat,long")
                let latitude = '', longitude = '';
                if (data.loc && data.loc.includes(',')) {
                    const locParts = data.loc.split(',');
                    latitude = locParts[0];
                    longitude = locParts[1];
                }
                
                resolve({
                    ip_address: ip || data.ip,
                    city: data.city || '',
                    region: data.region || '',
                    country_code: data.country || '',
                    latitude: latitude,
                    longitude: longitude
                });
            })
            .catch(error => {
                //console.log("IPInfo error:", error.message);
                reject(error);
            });
    });
}

/**
 * Get location data from GeoJS
 * @param {string} ip - IP address to look up
 * @returns {Promise} Promise resolving to location data
 */
function getGeoJSData(ip) {
    return new Promise((resolve, reject) => {
        // Use IP parameter if provided
        const url = ip ? `https://get.geojs.io/v1/ip/geo/${ip}.json` : 'https://get.geojs.io/v1/ip/geo.json';
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('GeoJS: Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                //console.log("GeoJS data:", data);
                
                resolve({
                    ip_address: ip || data.ip,
                    city: data.city || '',
                    region: data.region || '',
                    country_code: data.country_code || '',
                    latitude: data.latitude || '',
                    longitude: data.longitude || ''
                });
            })
            .catch(error => {
                //console.log("GeoJS error:", error.message);
                reject(error);
            });
    });
}

/**
 * Get location data from IPAPI.co
 * @param {string} ip - IP address to look up
 * @returns {Promise} Promise resolving to location data
 */
function getIPAPIData(ip) {
    return new Promise((resolve, reject) => {
        // Use our proxy endpoint
        const url = ip ? `/api/ip-geolocation/${ip}` : '/api/ip-geolocation';
        
        //console.log("Fetching location data through proxy for IP:", ip);
        
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Geolocation: Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Check for error response
            if (data.error) {
                throw new Error(`Geolocation error: ${data.error}`);
            }
            
            //console.log("Geolocation data:", data);
            
            resolve({
                ip_address: ip || data.ip_address,
                city: data.city || '',
                region: data.region || '',
                country_code: data.country_code || '',
                latitude: data.latitude || '',
                longitude: data.longitude || ''
            });
        })
        .catch(error => {
            //console.log("Geolocation error:", error.message);
            reject(error);
        });
    });
}

/**
 * Get just the IP address as fallback
 * @returns {Promise} Promise resolving to basic IP data
 */
function getFallbackIpOnly() {
    return new Promise((resolve, reject) => {
        // Try multiple IP services in case one fails
        Promise.any([
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    //console.log("IP detection from ipify:", data.ip);
                    return data;
                }),
            fetch('https://ipinfo.io/json')
                .then(response => response.json())
                .then(data => {
                    //console.log("IP detection from ipinfo:", data.ip);
                    return data;
                }),
            fetch('https://get.geojs.io/v1/ip.json')
                .then(response => response.json())
                .then(data => {
                    //console.log("IP detection from geojs:", data.ip);
                    return data;
                })
        ])
        .then(data => {
            const ip = data.ip || data.client_ip || '';
            //console.log("Final IP detection result:", ip);
            
            // Log the IP detection source
            const source = data.ip ? 'ipify' : 
                          data.client_ip ? 'ipinfo' : 
                          'geojs';
            //console.log("IP detected from source:", source);
            
            resolve({
                ip_address: ip,
                city: '',
                region: '', 
                country_code: '',
                latitude: '',
                longitude: ''
            });
        })
        .catch(error => {
            //console.log("All IP services failed:", error);
            reject(error);
        });
    });
}

/**
 * Add location data to the specified forms
 * @param {Array} formIds - Array of form IDs to add location data to
 * @param {Object} locationData - Location data to add
 */
function addLocationDataToForms(formIds, locationData) {
    //console.log("Adding location data to forms:", locationData);
    
    formIds.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            // Add or update hidden fields for location data
            addOrUpdateHiddenField(form, 'ip_address', locationData.ip_address);
            addOrUpdateHiddenField(form, 'city', locationData.city);
            addOrUpdateHiddenField(form, 'region', locationData.region);
            addOrUpdateHiddenField(form, 'country_code', locationData.country_code);
            addOrUpdateHiddenField(form, 'latitude', locationData.latitude);
            addOrUpdateHiddenField(form, 'longitude', locationData.longitude);
            
            // console.log(`Location data added to form #${formId}:`, {
            //     ip_address: locationData.ip_address,
            //     city: locationData.city,
            //     region: locationData.region,
            //     country_code: locationData.country_code,
            //     latitude: locationData.latitude,
            //     longitude: locationData.longitude
            // });
        } else {
            console.warn(`Form #${formId} not found in the document.`);
        }
    });
}

/**
 * Add or update a hidden field in a form
 * @param {HTMLFormElement} form - The form to add the field to
 * @param {string} name - The name of the field
 * @param {string} value - The value of the field
 */
function addOrUpdateHiddenField(form, name, value) {
    // Check if the field already exists
    let field = form.querySelector(`input[name="${name}"]`);
    
    if (!field) {
        // Create new field if it doesn't exist
        field = document.createElement('input');
        field.type = 'hidden';
        field.name = name;
        form.appendChild(field);
    }
    
    // Set or update the value
    field.value = value || '';
} 