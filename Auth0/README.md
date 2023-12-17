# Auth0 Actions/Rules

Auth0 provides the ability to configure actions/rules that gets executed 

## Contents

* [PostUserRegistration](#PostUserRegistration)
    * [ApplyRole](#ApplyRole)

## PostUserRegistration

The post user registration flow gets called after a user registers with Auth0.

### ApplyRole

This function applies the correct role and permissions to the user after registration based on registration email. It will block and flag guest users for deletion if the number of guest users is equal or greater than the set threshold. Uses the Auth0 SDK to count the number of guest users.
