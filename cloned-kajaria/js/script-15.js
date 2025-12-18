var KAJARIA_BASE_URL = window.KAJARIA_BASE_URL || location.origin;
function initKajariaSearch() {
    document.removeEventListener('DOMContentLoaded', initKajariaSearch); // Prevent double init
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const suggestionsList = document.getElementById('suggestions-list');
    const iconSearchLink = document.getElementById('icon-search-link');
    if (!searchInput || !searchResults || !suggestionsList) return;

    searchInput.addEventListener('input', function () {
        const query = this.value;
        if (query.length >= 1) {
            fetchSuggestions(query);
        } else {
            fetchSuggestions('');
        }
    });

    var isEmbed = window !== window.parent;
    if (isEmbed) {
        // Use pointerdown for navigation to ensure it fires before blur
        suggestionsList.addEventListener('pointerdown', function (event) {
            const anchor = event.target.closest('a[data-type]');
            if (anchor) {
                const itemType = anchor.getAttribute('data-type');
                const itemUrl = anchor.getAttribute('data-url');
                const itemId = anchor.getAttribute('data-id');
                const itemName = anchor.getAttribute('data-name');

                recordSearch(itemType, itemId, itemUrl, itemName);
                window.location.href = itemUrl;
                // Prevent any other click/blur from interfering
                event.stopPropagation();
            }
        });
        // Prevent any click on the dropdown from bubbling up
        searchResults.addEventListener('mousedown', function (e) {
            e.stopPropagation();
        });
        searchResults.addEventListener('pointerdown', function (e) {
            e.stopPropagation();
        });
        // Expose a function to close the dropdown externally
        window.closeKajariaSearchDropdown = function() {
            searchResults.style.display = 'none';
        };
    } else {
        // Main site: keep original click event
        suggestionsList.addEventListener('click', function (event) {
            const anchor = event.target.closest('a[data-type]');
            if (anchor) {
                const itemType = anchor.getAttribute('data-type');
                const itemUrl = anchor.getAttribute('data-url');
                const itemId = anchor.getAttribute('data-id');
                const itemName = anchor.getAttribute('data-name');

                recordSearch(itemType, itemId, itemUrl, itemName);
                window.location.href = itemUrl;
            }
        });
    }

    function fetchSuggestions(query) {
        fetch(`${KAJARIA_BASE_URL}/search/suggestions?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                updateSuggestionsList(data);
            })
            .catch(error => {
                console.error('Error fetching suggestions:', error);
            });
    }
    // Record search data when a result is clicked
    function recordSearch(itemType, itemId, itemUrl, itemName) {
        fetch(`${KAJARIA_BASE_URL}/record-search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            body: JSON.stringify({ type: itemType, item_id: itemId, item_url: itemUrl, item_name: itemName }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to record search');
                }
                return response.json();
            })
            .then(data => console.log('Search recorded:', data))
            .catch(error => console.error('Error recording search:', error));
    }
    function updateSuggestionsList(data) {
        suggestionsList.innerHTML = ''; // Clear previous suggestions
        const hasData = (data.categories.length > 0 || data.collections.length > 0 || data.applications.length > 0 || data.blogs.length > 0 || data.products.length > 0 || data.sizes.length > 0 || data.finishes.length > 0);
        if (hasData) {
            // Create a div to hold the two columns
            const container = document.createElement('div');
            container.classList.add('suggest');
            container.style.display = 'flex';
    
            // Create column for categories and blogs
            const suggestionsColumn = document.createElement('div');
            suggestionsColumn.style.flex = '1'; // Take up equal space
            suggestionsColumn.style.marginRight = '10px'; // Space between columns
            const suggestionsListUl = document.createElement('ul');
            suggestionsListUl.classList.add('search_list');
            
            // Add categories
            data.categories.forEach(ProductCategory => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" data-type="Category" data-id="${ProductCategory.id}" data-name="${ProductCategory.name}" data-url="${ProductCategory.url}">
                    <div class="sug-box d-flex">
                        <img src="${ProductCategory.image || '/images/placeholder/product-placeholder.svg'}" alt="${ProductCategory.name}" onerror="this.onerror=null;this.src='/images/placeholder/product-placeholder.svg';">
                        <h4 class="b-ttile">${ProductCategory.name} (Category)</h4>
                    </div>
                </a>`;
                suggestionsListUl.appendChild(li);
            });

            // Add collections
            data.collections.forEach(collection => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" data-type="Collection" data-id="${collection.id}" data-name="${collection.name}" data-url="${collection.url}">
                    <div class="sug-box d-flex">
                        <img src="${collection.image || '/images/placeholder/product-placeholder.svg'}" alt="${collection.name}" onerror="this.onerror=null;this.src='/images/placeholder/product-placeholder.svg';">
                        <h4 class="b-ttile">${collection.name} (Collection)</h4>
                    </div>
                </a>`;
                suggestionsListUl.appendChild(li);
            });

            // Add applications
            data.applications.forEach(application => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" data-type="Application" data-id="${application.id}" data-name="${application.name}" data-url="${application.url}">
                    <div class="sug-box d-flex">
                        <img src="${application.image || '/images/placeholder/product-placeholder.svg'}" alt="${application.name}" onerror="this.onerror=null;this.src='/images/placeholder/product-placeholder.svg';">
                        <h4 class="b-ttile">${application.name} (Application)</h4>
                    </div>
                </a>`;
                suggestionsListUl.appendChild(li);
            });
    
            // Add blogs
            data.blogs.forEach(blog => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" data-type="Blog" data-id="${blog.id}" data-name="${blog.name}" data-url="${blog.url}">
                    <div class="sug-box d-flex">
                        <img src="${blog.image || '/images/placeholder/product-placeholder.svg'}" alt="${blog.name}" onerror="this.onerror=null;this.src='/images/placeholder/product-placeholder.svg';">
                        <h4 class="b-ttile">${blog.name} (Blog)</h4>
                    </div>
                </a>`;
                suggestionsListUl.appendChild(li);
            });
            // Add Sizes
            data.sizes.forEach(size => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" data-type="Size" data-id="${size.id}" data-name="${size.name}" data-url="${size.url}">
                    <div class="sug-box d-flex">
                        <img src="${size.image || '/images/placeholder/product-placeholder.svg'}" alt="${size.name}" onerror="this.onerror=null;this.src='/images/placeholder/product-placeholder.svg';">
                        <h4 class="b-ttile">${size.name} (Size)</h4>
                    </div>
                </a>`;
                suggestionsListUl.appendChild(li);
            });
            // Add Finishes
            data.finishes.forEach(finish => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" data-type="Finish" data-id="${finish.id}" data-name="${finish.name}" data-url="${finish.url}">
                    <div class="sug-box d-flex">
                        <img src="${finish.image || '/images/placeholder/experience-center-placeholder.svg'}" alt="${finish.name}" onerror="this.onerror=null;this.src='/images/placeholder/experience-center-placeholder.svg';">
                        <h4 class="b-ttile">${finish.name} (Finish)</h4>
                    </div>
                </a>`;
                suggestionsListUl.appendChild(li);
            });
    
            suggestionsColumn.innerHTML = '<h3>Suggestions</h3>';
            suggestionsColumn.appendChild(suggestionsListUl);
    
            // Create column for products
            const productsColumn = document.createElement('div');
            productsColumn.style.flex = '1'; // Take up equal space
            const productsListUl = document.createElement('ul');
            productsListUl.classList.add('search_list');
            
            // Add products
            data.products.forEach(product => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" data-type="Product" data-id="${product.id}" data-name="${product.name}" data-url="${product.url}"><div class="blog-box d-flex align-items-start"><img src="${product.image || '/images/placeholder/product-placeholder.svg' }" alt="" onerror="this.onerror=null;this.src='/images/placeholder/product-placeholder.svg';"><div class="inline-flex flex-col"><div class="cat-list"><h4 class="b-ttile">${product.name}</h4><div class="cat-item">${product.trendcategory}</div></div><p class="search_size">${product.sizes}</p><div class="cat-item finishsearch"><span>${product.finishes}</span></div></div></div></a>`;
                productsListUl.appendChild(li);
            });
    
            productsColumn.innerHTML = '<h3>Products</h3>';
            productsColumn.appendChild(productsListUl);
    
            // Append both columns to the container
            container.appendChild(suggestionsColumn);
            container.appendChild(productsColumn);
    
            suggestionsList.appendChild(container);
        } else {
            const li = document.createElement('li');
            li.textContent = 'No data available.';
            suggestionsList.appendChild(li);
        }
        searchResults.style.display = 'block'; // Show results
    }
}
document.addEventListener('DOMContentLoaded', initKajariaSearch);

// Recent/Popular list
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('search-input');
    const recentSearchesList = document.getElementById('recent-searches');
    const popularSearchesList = document.getElementById('popular-searches');

    // Prevent default form submission
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
    });

    // Utility function to get or set the device_id cookie
    function getOrSetDeviceId() {
        const deviceIdCookie = document.cookie.split('; ').find(row => row.startsWith('device_id='));
        let deviceId = deviceIdCookie ? deviceIdCookie.split('=')[1] : null;

        if (!deviceId) {
            deviceId = (window.crypto && window.crypto.randomUUID)
                ? window.crypto.randomUUID()
                : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            document.cookie = `device_id=${deviceId}; path=/; max-age=${60 * 60 * 24 * 365};`;
        }

        return deviceId;
    }

    const deviceId = getOrSetDeviceId(); // Get or create the device_id

    function fetchSearchLists() {
        fetch(`${KAJARIA_BASE_URL}/search/lists`)
            .then(response => response.json())
            .then(data => {
                updateSearchList(recentSearchesList, data.recent, true); // Recent searches
                updateSearchList(popularSearchesList, data.popular, false); // Popular searches
            })
            .catch(error => console.error('Error fetching search lists:', error));
    }

    function updateSearchList(listElement, data, isRecent) {
        listElement.innerHTML = '';
        if (data.length > 0) {
            data.forEach(search => {
                const li = document.createElement('li');
                li.dataset.id = search.id; // Adding data-id for tracking
                li.innerHTML = `
                    <a href="${search.item_url}">
                    ${isRecent ? `<i class="icon-history"></i>` : `<i class="icon-search"></i>` } ${search.item_name} (${search.type})
                    </a>
                    ${isRecent
                        ? `<button class="delete-btn" data-id="${search.id}" data-type="${search.type}"><i class="icon-close"></i></button>`
                        : '<button><i class="icon-trend"></i></button>'
                    }
                `;
                listElement.appendChild(li);
            });

            if (isRecent) {
                const clearAllButton = document.createElement('button');
                // clearAllButton.textContent = 'Clear All';
                clearAllButton.innerHTML = 'Clear All <i class="icon-arrow-left"></i>';
                clearAllButton.className = 'clear-all-btn';
                listElement.appendChild(clearAllButton);
            }
        } else {
            listElement.innerHTML = '<li>No searches found.</li>';
        }
    }

    // Functions for AJAX operations: remove recent search and clear all
    function removeRecentSearch(searchId) {
        fetch(`${KAJARIA_BASE_URL}/search/remove-recent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            body: JSON.stringify({ search_id: searchId }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const searchItem = document.querySelector(`li[data-id="${searchId}"]`);
                    if (searchItem) searchItem.remove();
                }
            })
            .catch(error => console.error('Error removing recent search:', error));
    }

    function clearAllRecentSearches() {
        fetch(`${KAJARIA_BASE_URL}/search/clear-recent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    recentSearchesList.innerHTML = ''; // Clear the list
                }
            })
            .catch(error => console.error('Error clearing recent searches:', error));
    }

    // Event delegation for delete and clear all buttons
    recentSearchesList.addEventListener('click', event => {
        // if (event.target.closest('.delete-btn')) {
        //     const searchId = event.target.getAttribute('data-id');
        //     removeRecentSearch(searchId);
        // } else if (event.target.matches('.clear-all-btn')) {
        //     clearAllRecentSearches();
        // }
        const deleteButton = event.target.closest('.delete-btn'); 
        if (deleteButton) {
            const searchId = deleteButton.getAttribute('data-id');
            removeRecentSearch(searchId);
        } else if (event.target.matches('.clear-all-btn')) {
            clearAllRecentSearches();
        }
    });

    // Fetch search lists on page load
    fetchSearchLists();
});



