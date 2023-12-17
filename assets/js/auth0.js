import { Auth0Client } from '@auth0/auth0-spa-js';

const auth0 = new Auth0Client({
    domain: process.env.AUTH0_DOMAIN,
    client_id: process.env.AUTH0_CLIENT_ID,
    redirect_uri: window.location.origin
});


const handleError = (error, message) => {
    console.error(`${message}:`, error.message, error.stack);
    document.dispatchEvent(new CustomEvent('authError', { detail: { error, message } }));
};

const login = async () => {
    try {
        await auth0.loginWithRedirect();
    } catch (error) {
        handleError(error, "Login failed");
    }
};

const logout = () => {
    auth0.logout({
        returnTo: window.location.origin
    });
};

const isAuthenticated = async () => {
    try {
        return await auth0.isAuthenticated();
    } catch (error) {
        handleError(error, "Authentication check failed");
        return false;
    }
};

const handleAuthState = async () => {
    try {
        const authState = await isAuthenticated();
        document.dispatchEvent(new CustomEvent('authStateChanged', { detail: { authState } }));
    } catch (error) {
        handleError(error, "Error handling auth state");
    }
};

/**
 * 
 * @returns A valid Auth0 token.
 */
const getToken = async () => {
    try {
        const token = await auth0.getTokenSilently();
        return token;
    } catch (error) {
        handleError(error, "Error getting token");
        return null;
    }
};

const refreshAuthToken = async () => {
    try {
        await auth0.checkSession();
        document.dispatchEvent(new CustomEvent('authTokenRefreshed'));
    } catch (error) {
        handleError(error, "Token refresh failed");
    }
};

export { login, logout, isAuthenticated, handleAuthState, getToken, refreshAuthToken };
