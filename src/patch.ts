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
   * @method patch
   * @param reqURL 
   * @param body 
   * @param headers 
   * @param option 
   * @returns object
   * @thorws exceptions
   */
  export async function patch(reqURL: string, body: object, returnJson = true, headers?: HeadersInit, option?: optionSettings) : Promise<any>
  {
    //Validate config
    validateOptions(option);
    
    //Create options
    let options = assignConfig("PATCH", headers, option);

    //Add the body to the options
    let optionsWithBody = Object.assign(options, {body: JSON.stringify(body)});
  
    //Create request
    let response = await fetch(reqURL, optionsWithBody);
  
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
  