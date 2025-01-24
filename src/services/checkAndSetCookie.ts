import { getCookieName } from "./getCookieName";
import { setCookie } from "./setCookie";

export function checkAndSetCSRFToken() {
    const csrfToken = getCookieName('csrftoken');
    if (!csrfToken) {
        setCookie('csrftoken', '', 1);
    } else {
    } 
}