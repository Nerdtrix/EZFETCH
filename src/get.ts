/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*** Powered by: Nerdtrix LLC
*** Website: https://Nerdtrix.com
*** Email: info@nerdtrix.com
*** Author name: Jerry Urena
*** License: MIT
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


import {
    optionSettings, 
    objectToQueryString,
    validateOptions,
    assignConfig} from './config';
  
  
/**
 * @method get
 * @param reqURL 
 * @param params 
 * @param headers 
 * @param option 
 * @returns object
 * @throws exceptions
 */
export async function get<T>(
    reqURL: string, 
    params?: object, 
    returnJson = true, 
    headers?: HeadersInit, 
    option?: optionSettings) : Promise<T | any>
{
    //Validate config
    validateOptions(option);
    
    //Create options
    let options = assignConfig("GET", headers, option);

    let request = "";

    //Convert object to query string
    if(params !== undefined)
    {
        request = objectToQueryString(params);
    }

    //create request
    let response = await fetch(reqURL + request, options);

    if(response.status >= 400 && response.status < 500)
    {
        if(returnJson)
        {
            throw Object(await response.json() as Promise<T>);
        }

        throw (response);
    }
    else if(response.status >= 500)
    {
        throw new Error ("internal server error"); 
    }

    if(returnJson) return await response.json() as Promise<T>;
        
    return response;
}