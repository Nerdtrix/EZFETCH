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
export const defaultHeaders : HeadersInit = {
    "Content-Type" : "application/json",
    "Accept" : "application/json"
};


//Valid request modes
const requestMode: string[] = [
    "no-cors",
    "cors", //Default
    "same-origin"
];


//Valid request caches
const requestCache: string[] = [
    "no-cache",
    "default", //default
    "reload",
    "force-cache",
    "only-if-cached"
];


//Valid request credentials
const requestCredentials: string[] = [
    "same-origin",
    "include",
    "omit"
];


//Valid request redirects
const requestRedirect: string[] = [
    "manual",
    "follow",//Default
    "error"
];


//Valid request policies
const referrerPolicy: string[] = [
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
export function objectToQueryString(obj: any) : string
{
    if (Object.keys(obj).length === 0 || obj === undefined)
    {
        return "";
    };

    let request = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');

    
    return "?" + request;
}


/**
 *
 * @param option optionSettings
 * @comment validate request options
 */
export function validateOptions(option?: optionSettings) : void
{
    //Validations
    if(!!option?.mode && !requestMode.includes(option?.mode)) throw new Error("invalid Request mode");
    if(!!option?.cache && !requestCache.includes(option?.cache)) throw new Error ("invalid Request cache");
    if(!!option?.credentials && !requestCredentials.includes(option?.credentials)) throw new Error ("invalid Request credential");
    if(!!option?.redirect && !requestRedirect.includes(option?.redirect)) throw new Error ("invalid Request redirect");
    if(!!option?.policy && !referrerPolicy.includes(option?.policy)) throw new Error ("invalid Request policy");
}


/**
 *
 * @param method
 * @param headers
 * @param option
 * @returns object
 * @comment create a request header.
 */
export function assignConfig(method: string, headers?: HeadersInit, option?: optionSettings) : object
{
    let options = {
        method: method,
        headers: headers ?? defaultHeaders
    };

    if(!!option?.mode) Object.assign(options, {mode: option.mode});
    if(!!option?.cache) Object.assign(options, {cache: option.cache});
    if(!!option?.credentials) Object.assign(options, {credentials: option.credentials});
    if(!!option?.redirect) Object.assign(options, {redirect: option.redirect});
    if(!!option?.policy) Object.assign(options, {referrerPolicy: option.policy});

    //Assign default
    if(!option?.credentials) Object.assign(options, {credentials: requestCredentials[1]});

    return options;
}


/**
 *
 * @param data
 * @returns boolean
 * @comment check if the data is json or not.
 */
export function isJson(data : any) : boolean
{
    try 
    {
        JSON.parse(data);

        return true;

    } catch (e : unknown) 
    {
        return false;
    }
}