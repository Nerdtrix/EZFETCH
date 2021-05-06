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
    validateOptions} from './config';
  
  
  
/**
 * @method _delete
 * @param reqURL 
 * @param headers 
 * @param option 
 * @returns object
 * @thorws exceptions
 */
export async function _delete(reqURL: string, returnJson = true, headers?: HeadersInit, option?: optionSettings) : Promise<any>
{
    //Validate option
    validateOptions(option);
    
    //Create options
    let options = assignConfig("DELETE", headers, option);

    //Start request
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