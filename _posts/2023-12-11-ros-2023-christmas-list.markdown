---
layout: post
title:  "Ro's Christmas Wish List - 2023"
date:   2023-12-11 00:00:00 -0700
author: Neil Crum
categories: Christmas 2023 Ro Wishlist
---

<!-- Bootstrap Alert Placeholder -->
<div id="alertPlaceholder" class="alert" role="alert" style="display:none;"></div>

<div class="list-group" id="wishListContainer">
    <!-- List items will be added here -->
</div>

<!-- Refresh and Reset buttons -->
<div class="btn-group" role="group">
    <button id="refreshButton">Refresh Wishlist</button>
    <!-- Add reset function (See wishlist.js) -->
</div>

<script>
    const namespace = "ro";
    const useCurrentURL = true;

    function showAlert(message, type) {
        const alertPlaceholder = document.getElementById('alertPlaceholder');
        alertPlaceholder.className = `alert alert-${type}`;
        alertPlaceholder.textContent = message;
        alertPlaceholder.style.display = 'block';
    }

    /** Event listener to load wishes when the DOM content is fully loaded. */
    document.addEventListener("DOMContentLoaded", function() {
        loadWishes(namespace, useCurrentURL);
    });
    /** Refresh button */
    document.getElementById("refreshButton").addEventListener("click", () => {
        refresh(namespace, useCurrentURL);
    });
    // Periodically check for updates every hour
    // setInterval(checkForUpdates, 360000);
    // Event listener for auth errors
    document.addEventListener('authError', function(event) {
        refresh(namespace, useCurrentURL);
        showAlert(event.detail.message, 'danger');
    });
    // Event listener for auth state changes
    document.addEventListener('authStateChanged', function(event) {
        refresh(namespace, useCurrentURL);
        showAlert('Authentication state changed', 'info');
    });
    // Event listener for updating wishlist
    document.addEventListener('wishlistUpdated', function(event) {
        showAlert(`Wishlist updated for ${event.detail.namespace}`, 'success');
    });
    // Event listener for wishlist errors
    document.addEventListener('wishlistError', function(event) {
        showAlert(event.detail.error, 'danger');
    });
</script>
