class CountryStateHandler {
    constructor(options = {}) {
        this.countrySelect = document.getElementById(options.countryId);
        this.stateSelect = document.getElementById(options.stateId);
        this.apiKey = options.apiKey;
        this.countryData = new Map(); // Store country data
        this.stateData = new Map();   // Store state data
        this.cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        this.init();
    }

    async init() {
        if (!this.countrySelect || !this.stateSelect) return;

        try {
            const countries = await this.getCountries();
            this.populateCountries(countries);

            // Setup event listeners
            this.countrySelect.addEventListener('change', () => this.loadStates());

            // Pre-select India
            const indiaOption = Array.from(this.countrySelect.options)
                .find(option => option.value === 'IN');
            if (indiaOption) {
                indiaOption.selected = true;
                this.loadStates();
            }
        } catch (error) {
            console.error('Failed to load countries:', error);
        }
    }

    async getCountries() {
        // Try to get from cache first
        const cachedData = this.getFromCache('countries');
        if (cachedData) return cachedData;

        // If not in cache, fetch from API
        const response = await fetch('/api/countries');
        const countries = await response.json();
        
        // Store country data for reference
        countries.forEach(country => {
            this.countryData.set(country.iso2, country.name);
        });

        // Save to cache
        this.saveToCache('countries', countries);
        return countries;
    }

    async getStates(countryCode) {
        // Try to get from cache first
        const cacheKey = `states_${countryCode}`;
        const cachedData = this.getFromCache(cacheKey);
        if (cachedData) return cachedData;

        // If not in cache, fetch from API
        const response = await fetch(`/api/states/${countryCode}`);
        const states = await response.json();
        
        // Store state data for reference
        this.stateData.set(countryCode, new Map());
        states.forEach(state => {
            this.stateData.get(countryCode).set(state.iso2, state.name);
        });

        // Save to cache
        this.saveToCache(cacheKey, states);
        return states;
    }

    saveToCache(key, data) {
        const cacheData = {
            data: data,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(key, JSON.stringify(cacheData));
    }

    getFromCache(key) {
        try {
            const cacheData = JSON.parse(localStorage.getItem(key));
            if (!cacheData) return null;

            // Check if cache is expired
            const now = new Date().getTime();
            if (now - cacheData.timestamp > this.cacheExpiry) {
                localStorage.removeItem(key);
                return null;
            }

            return cacheData.data;
        } catch (error) {
            return null;
        }
    }

    populateCountries(countries) {
        if (!countries || !countries.length) return;
        
        this.countrySelect.innerHTML = '<option value="">Select Country</option>';
        countries.forEach(country => {
            // Use iso2 as value but show full name
            const option = new Option(country.name, country.iso2);
            // Store full name as data attribute
            option.dataset.fullName = country.name;
            this.countrySelect.add(option);
        });
    }

    async loadStates() {
        const countryCode = this.countrySelect.value;
        this.stateSelect.innerHTML = '<option value="">Select State</option>';
        
        if (!countryCode) return;

        try {
            const states = await this.getStates(countryCode);
            states.forEach(state => {
                // Use iso2 as value but show full name
                const option = new Option(state.name, state.iso2);
                // Store full name as data attribute
                option.dataset.fullName = state.name;
                this.stateSelect.add(option);
            });
        } catch (error) {
            console.error('Failed to load states:', error);
        }
    }

    getSelectedNames() {
        const countryCode = this.countrySelect.value;
        const stateCode = this.stateSelect.value;
        
        return {
            country: this.countryData.get(countryCode) || countryCode,
            state: this.stateData.get(countryCode)?.get(stateCode) || stateCode
        };
    }

    clearCache() {
        // Clear all related cache items
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('countries') || key.startsWith('states_')) {
                localStorage.removeItem(key);
            }
        });
    }
}

// Initialize handlers with cache clearing option
document.addEventListener('DOMContentLoaded', function() {
    // Clear cache if it's older than 24 hours
    const lastCacheClear = localStorage.getItem('lastCacheClear');
    const now = new Date().getTime();
    if (!lastCacheClear || now - parseInt(lastCacheClear) > 24 * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem('lastCacheClear', now);
    }

    // Initialize handlers
    const handlers = [];

    // For enquiry form
    if (document.getElementById('enquiry_country')) {
        handlers.push(new CountryStateHandler({
            countryId: 'enquiry_country',
            stateId: 'enquiry_state'
        }));
    }

    // For contact form
    if (document.getElementById('contact_country')) {
        handlers.push(new CountryStateHandler({
            countryId: 'contact_country',
            stateId: 'contact_state'
        }));
    }
});