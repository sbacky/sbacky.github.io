# AWS Lambda Functions

The wishlist function uses an AWS backend consisting of an API Gateway with endpoints integrated with Lambda Functions that perform operations on a DynamoDB table. Additionally, each endpoint is secured using an Auth0 custom Authorizor.

## Contents

* [createWishItem](#createWishItem)
* [getWishItems](#getWishItems)
* [updateWishItem](#updateWishItem)
* [deleteWishItem](#deleteWishItem)
* [selectWishItem](#selectWishItem)
* [auth0JWTValidator](#auth0JWTValidator)
* [deletePendingAuth0GuestUsers](#deletePendingAuth0GuestUsers)

## createWishItem

This function handles creating a new item in DynamoDB WishlistTable. Parses the incoming request to extract wish item details. Uses the AWS SDK to put a new item in WishlistTable.

Endpoint: POST /createWishItem

## getWishItems

This function retrieves items from DynamoDB. If a namespace is provided, uses it to query items under that namespace. Return the list of items in the response.

Endpoint: GET /getWishlist

## updateWishItem

This function updates an existing item in your DynamoDB table. Parses the request to get the itemId, namespace, and item details to be updated. Uses the AWS SDK to update the item in DynamoDB.

PUT /updateWishItem

## deleteWishItem

This function handles the deletion of an item. Parses the itemId and namespace from the request. Uses the AWS SDK to delete the item from DynamoDB.

DELETE /deleteWishItem

## selectWishItem

POST /selectWishItem

## auth0JWTValidator

This function is used as a custom Authorizer to check for Auth0 token

## deletePendingAuth0GuestUsers

TODO: Configure trigger to run lambda function

This function automates the process for managing the deletion of guest users who are flagged for deletion. Queries Auth0 for list of guest users with pendingDeletion flagged raised. Uses Auth0 SDK to delete guest users from Auth0.

DELETE /auth0Domain + apiEndpoint
