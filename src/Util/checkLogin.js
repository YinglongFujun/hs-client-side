import cookie from 'react-cookies';
import getUrl from './getApiUrl';

export default () => {
    const token = cookie.load('oauth-token');
    const currentUrl = window.location;
    if (!token) {
        if (process.env.NODE_ENV === 'production') {
            window.location = getUrl('id', `/login?service=hs_service_login&redirect=${currentUrl}`, false);
        } else {
            window.location = getUrl('id', `/login?service=hs_service_login&redirect=${currentUrl}`, false);
        }
        return false;
    } else {
        return true;
    }
}