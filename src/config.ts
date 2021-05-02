/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*** Powered by: Nerdtrix LLC
*** Website: https://Nerdtrix.com
*** Email: info@nerdtrix.com
*** Author name: Jerry Urena
*** License: MIT
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


//Fetch config types
export interface optionSettings {
    mode?: string,
    cache?: string,
    credentials?: string,
    redirect?: string,
    policy?: string
}
  
  
//Default headers
export const defaultHeaders: HeadersInit = {
    "Content-Type" : "application/json",
    "Accept" : "application/json"
};
  
  
//Valid request modes
export const requestMode: string[] = [
    "no-cors",
    "cors", //Default
    "same-origin"
];


//Valid request caches
export const requestCache: string[] = [
    "no-cache", 
    "default", //default
    "reload", 
    "force-cache", 
    "only-if-cached"
];


//Valid request credentials
export const requestCredentials: string[] = [
    "same-origin",
    "include", 
    "omit"  
];


//Valid request redirects
export const requestRedirect: string[] = [
    "manual",
    "follow",//Default
    "error"
];


//Valid request policies
export const referrerPolicy: string[] = [
    "no-referrer",
    "no-referrer-when-downgrade",//Default
    "origin",
    "origin-when-cross-origin",
    "same-origin",
    "strict-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
];


/**
 * @method _objectToQueryString
 * @param {*} obj 
 * @return string
 * convert object to query strings
 */
export function objectToQueryString(obj: object) : string
{
    let request = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');

    return "?" + request;
}