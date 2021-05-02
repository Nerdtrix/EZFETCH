/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*** Powered by: Nerdtrix LLC
*** Website: https://Nerdtrix.com
*** Email: info@nerdtrix.com
*** Author name: Jerry Urena
*** License: MIT
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


import {
    optionSettings, 
    defaultHeaders, 
    requestMode, 
    requestCache, 
    requestCredentials, 
    requestRedirect, 
    referrerPolicy } from './config';
  
  
  
/**
 * @method _delete
 * @param reqURL 
 * @param headers 
 * @param option 
 * @returns object
 * @thorws exceptions
 */
export async function _delete(reqURL: string, headers?: HeadersInit, returnJson = true, option?: optionSettings) : Promise<any>
{
    //Validations
    if(!!option?.mode && !requestMode.includes(option?.mode)) throw ("invalid Request mode");
    if(!!option?.cache && !requestCache.includes(option?.cache)) throw ("invalid Request cache");
    if(!!option?.credentials && !requestCredentials.includes(option?.credentials)) throw ("invalid Request credential");
    if(!!option?.redirect && !requestRedirect.includes(option?.redirect)) throw ("invalid Request redirect");
    if(!!option?.policy && !referrerPolicy.includes(option?.policy)) throw ("invalid Request policy");

    let options = {
    method: "DELETE",
    headers: headers ?? defaultHeaders,
    RequestMode: option?.mode ?? requestMode[1],
    RequestCache: option?.cache ?? requestCache[1], 
    RequestCredentials: option?.credentials ?? requestCredentials[1], 
    RequestRedirect: option?.redirect ?? requestRedirect[1],
    ReferrerPolicy: option?.policy ?? referrerPolicy[1] 
    };

    let response = await fetch(reqURL, options);

    if(response.status >= 400 && response.status < 500)
    {
        if(returnJson) throw await response.json();

        throw response;
    }
    else if(response.status >= 500)
    {
        throw  ("internal server error"); 
    }

    if(returnJson) return await response.json();
        
    return response;
}