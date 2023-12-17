import { isAuthenticated, getToken } from './auth0.js';

/** Constants */
const GET_WISHLIST_URL = process.env.GET_WISH_ITEMS;
const SELECT_WISH_URL = process.env.SELECT_WISH_ITEM;
const GET_HASH_URL = process.env.GET_WISHLIST_HASH;
const CACHE_KEY = process.env.CACHE_KEY;
const getCacheKey = (namespace) => `${CACHE_KEY}_${namespace}`;

function handleError(error, message) {
    console.error(`${message}:`, error);
    document.dispatchEvent(new CustomEvent('wishlistError', { detail: { error: error, message: message } }));
}

/**
 * Use hash to determine whether cache is outdated or not
 * @param {string} namespace - The namespace of the wishlist
 * @returns {boolean}
 */
async function isCacheValid(namespace) {
    const cacheKey = getCacheKey(namespace);
    const cachedData = JSON.parse(localStorage.getItem(cacheKey));
    if (!cachedData) return false;

    try {
        const token = await getToken();
        const response = await fetch(GET_WISHLIST_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) return false;

        const responseData = await response.json();
        const serverHash = responseData.body.hash;
        return cachedData.hash === serverHash;
    } catch (error) {
        handleError(error, 'Error validating cache');
        return false;
    }
}

/**
 * Gets the current page URL without any pathnames or query parameters.
 * @return {string} The current page URL stripped of any pathnames or query parameters.
 */
function getCurrentPageURL() {
    const url = new URL(window.location.href);
    return url.origin
}

/**
 * Loads wishes from local storage or fetches them from the GitHub repository if the cache is outdated or not available.
 *  @param {string} namespace - The namespace of the wishlist to be loaded.
 * @param {boolean} useCurrentURL - Optional flag to use the current page URL to fetch the wishlist. Set to true when testing in a local environemnt.
 */
async function loadWishes(namespace, useCurrentURL = false) {
    const cacheKey = getCacheKey(namespace);
    if (await isCacheValid(namespace)) {
        try {
            const cachedData = JSON.parse(localStorage.getItem(cacheKey));
            displayWishes(cachedData.data[namespace], namespace);
            return;
        } catch (error) {
            handleError(error, 'Error loading wish:')
        }
    }
    fetchWishList(namespace, useCurrentURL);
}

/**
 * Fetch wish list data from wishlist.json in github repo, save to cache in local storage, and display wishlist.
 * @param {string} namespace - The namespace of the wishlist to be fetched.
 * @param {boolean} useCurrentURL - Flag to use the current page URL to fetch the wishlist.
 */
async function fetchWishList(namespace, useCurrentURL) {
    const urlToFetch = useCurrentURL ? `${getCurrentPageURL()}/assets/wishlist.json` : GET_WISHLIST_URL;
     try {
        const token = await getToken();
        const resp = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!resp.ok) {
            handleError(error, `HTTP error! status: ${resp.status}`);
            return;
        }

        const wishListResponse = await resp.json();
        const wishList = wishListResponse.body;
        // Save to local storage (Cache)
        const cacheKey = getCacheKey(namespace);
        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: new Date().getTime(),
            hash: wishList.hash,
            data: wishList.items
        }));

        document.dispatchEvent(new CustomEvent('wishlistUpdated', { detail: { namespace } }));
    
        // Display wishlist
        if (wishList.items[namespace]) {
            displayWishes(wishList.items[namespace], namespace);
        } else {
            throw new Error(`Wishlist data for namespace: ${namespace} not found!`);
        }
    } catch (error) {
        handleError(error, 'Error fetching wishlist:');
    }
}

/**
 * Displays the list of wishes on the webpage.
 * @param {Array} wishes - An array of wish objects to be displayed.
 * @param {string} namespace - The namespace of the wishlist to be fetched.
 */
function displayWishes(wishes, namespace) {
    const listContainer = document.getElementById('wishListContainer');
    listContainer.innerHTML = '';

    // Create table elements
    const table = document.createElement('table');
    table.className = 'table table-striped align-middle';

    // Add table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
        </tr>`;
    table.appendChild(thead);

    // Add table body
    const tbody = document.createElement('tbody');
    wishes.forEach(async (wish) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td class="align-middle">
                <div class="my-auto" style="width: 150px">
                    <img src="${getCurrentPageURL()}/${wish.image}" class="img-thumbnail" alt="${wish.name}">
                </div>
            </td>
            <th scope="row"><a href="${wish.link}" target="_blank" rel="noopener noreferrer">${wish.name}</a></th>
            <td>${wish.desc}</td>
            <td>$${wish.price.toFixed(2)}</td>
        `;

        const td = document.createElement('td');
        const selectButton = document.createElement('button');
        selectButton.textContent = wish.selected ? 'Selected' : 'Select';
        selectButton.className = `btn ${wish.selected ? 'btn-success' : 'btn-primary'}`;
        selectButton.disabled = wish.selected || !(await isAuthenticated());
        selectButton.addEventListener('click', () => selectGift(wish.id, selectButton, namespace));
        td.appendChild(selectButton);
        tr.appendChild(td);

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    listContainer.appendChild(table);
}

/**
 * Marks a gift as selected and updates the local storage cache and DOM accordingly.
 * @param {number} giftId - The unique identifier of the gift to be selected.
 * @param {HTMLElement} buttonElement - The button element that triggered the selection.
 * @param {string} namespace - The namespace of the wishlist being updated.
 */
async function selectGift(giftId, buttonElement, namespace) {
    if (!(await isAuthenticated())) {
        alert("You need to be logged in to select a gift.");
        return;
    }
    const cacheKey = getCacheKey(namespace);
    const cachedData = JSON.parse(localStorage.getItem(cacheKey));
    console.log(cachedData);
    if (cachedData && cachedData.data && cachedData.data[namespace]) {
        const gift = cachedData.data[namespace].find(g => g.id === giftId);
        if (gift) {
            if (gift.selected) {
                alert('This item has already been selected.');
                return;
            }
            try {
                const token = await getToken();
                const resp = await fetch(SELECT_WISH_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ giftId, namespace })
                });

                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }

                gift.selected = true;
                localStorage.setItem(cacheKey, JSON.stringify(cachedData));

                // Update the button in the DOM
                buttonElement.disabled = true;
                buttonElement.textContent = 'Selected';
                buttonElement.className = 'btn btn-success';
            } catch (error) {
                handleError(error, 'Error selecting gift:');
            }
        }
    }
}

/**
 * Refresh the wishlist by clearing Cache and reloading the wishlist.
 * @param {string} namespace - The namespace of the wishlist to be fetched.
 * @param {boolean} useCurrentURL - Flag to use the current page URL to fetch the wishlist.
 */
function refresh(namespace, useCurrentURL) {
    const cacheKey = getCacheKey(namespace);
    localStorage.removeItem(cacheKey);
    loadWishes(namespace, useCurrentURL);
}

/**
 * Polling function to check for updates to wishlist.
 * @param {string} namespace - The namespace of the wishlist to be fetched.
 * @param {boolean} useCurrentURL - Flag to use the current page URL to fetch the
 */
async function checkForUpdates(namespace, useCurrentURL) {
    try {
        const token = getToken();
        const response = await fetch(GET_HASH_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        const data = await response.json();
        const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));

        if (cachedData.timestamp !== data.timestamp) {
            console.log('Data updated on server. Refreshing local cache.');
            refresh(namespace, useCurrentURL);
        }
    } catch (error) {
        handleError(error, 'Error checking for updates:');
    }
}

// Optional: Implement setInterval to periodically call checkForUpdates
// setInterval(() => {
//     const namespace = 'yourNamespace'; // Replace with actual namespace
//     checkForUpdates(namespace, false);
// }, 60000); // 60,000 milliseconds = 1 minute
