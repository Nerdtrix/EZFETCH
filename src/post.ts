/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*** Powered by: Nerdtrix LLC
*** Website: https://Nerdtrix.com
*** Email: info@nerdtrix.com
*** Author name: Jerry Urena
*** License: MIT
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


import {
    optionSettings, 
    assignConfig,
    validateOptions,
    defaultHeaders,
    isJson} from './config';


    
/**
 * @method post
 * @param reqURL 
 * @param body 
 * @param headers 
 * @param option 
 * @returns object
 * @thorws exceptions
 */
export async function post<T>(
    reqURL: string, 
    body: object | any, 
    returnJson = true, 
    headers?: object, 
    option?: optionSettings) : Promise<T | any>
{
    //Validate config
    if(!!option)  validateOptions(option);

    if(!headers) headers = defaultHeaders;

    //Create options
    let options = assignConfig("POST", headers as HeadersInit, option);

    if(isJson(body)) JSON.stringify(body);

    Object.assign(options, {body: body});

    //Create request
    let response = await fetch(reqURL, options);

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