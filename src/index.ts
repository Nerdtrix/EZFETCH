/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*** Powered by: Nerdtrix LLC
*** Website: https://Nerdtrix.com
*** Email: info@nerdtrix.com
*** Author name: Jerry Urena
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


//Fetch config types
interface optionSettings {
  mode?: string,
  cache?: string,
  credentials?: string,
  redirect?: string,
  policy?: string
}


//Default headers
let defaultHeaders: HeadersInit = {"Content-Type" : "application/json"};


//Valid request modes
let requestMode: string[] = [
  "no-cors",
  "cors", //Default
  "same-origin"
];


//Valid request caches
let requestCache: string[] = [
  "no-cache", 
  "default", //default
  "reload", 
  "force-cache", 
  "only-if-cached"
];


//Valid request credentials
let requestCredentials: string[] = [
  "same-origin",
  "include", 
  "omit"  
];


//Valid request redirects
let requestRedirect: string[] = [
  "manual",
  "follow",//Default
  "error"
];


//Valid request policies
let referrerPolicy: string[] = [
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
 * @method post
 * @param reqURL 
 * @param body 
 * @param headers 
 * @param option 
 * @returns object
 * @thorws exceptions
 */
async function post(reqURL: string, body: object, headers?: HeadersInit, option?: optionSettings) : Promise<any>
{
  //Validations
  if(!!option?.mode && !requestMode.includes(option?.mode)) throw ("invalid Request mode");
  if(!!option?.cache && !requestCache.includes(option?.cache)) throw ("invalid Request cache");
  if(!!option?.credentials && !requestCredentials.includes(option?.credentials)) throw ("invalid Request credential");
  if(!!option?.redirect && !requestRedirect.includes(option?.redirect)) throw ("invalid Request redirect");
  if(!!option?.policy && !referrerPolicy.includes(option?.policy)) throw ("invalid Request policy");

  let options = {
    method: "POST",
    headers: headers ?? defaultHeaders,
    body: JSON.stringify(body),
    RequestMode: option?.mode ?? requestMode[1],
    RequestCache: option?.cache ?? requestCache[1], 
    RequestCredentials: option?.credentials ?? requestCredentials[1], 
    RequestRedirect: option?.redirect ?? requestRedirect[1],
    ReferrerPolicy: option?.policy ?? referrerPolicy[1] 
  };

  let response = await fetch(reqURL, options);

  if(response.status >= 400 && response.status < 500)
  {
    throw await response.json();
  }
  else if(response.status >= 500)
  {
    throw  ("internal server error"); 
  }

  return await response.json();
}


/**
 * @method put
 * @param reqURL 
 * @param body 
 * @param headers 
 * @param option 
 * @returns object
 * @thorws exceptions
 */
async function put(reqURL: string, body: object, headers?: HeadersInit, option?: optionSettings) : Promise<any>
{
  //Validations
  if(!!option?.mode && !requestMode.includes(option?.mode)) throw ("invalid Request mode");
  if(!!option?.cache && !requestCache.includes(option?.cache)) throw ("invalid Request cache");
  if(!!option?.credentials && !requestCredentials.includes(option?.credentials)) throw ("invalid Request credential");
  if(!!option?.redirect && !requestRedirect.includes(option?.redirect)) throw ("invalid Request redirect");
  if(!!option?.policy && !referrerPolicy.includes(option?.policy)) throw ("invalid Request policy");

  let options = {
    method: "PUT",
    headers: headers ?? defaultHeaders,
    body: JSON.stringify(body),
    RequestMode: option?.mode ?? requestMode[1],
    RequestCache: option?.cache ?? requestCache[1], 
    RequestCredentials: option?.credentials ?? requestCredentials[1], 
    RequestRedirect: option?.redirect ?? requestRedirect[1],
    ReferrerPolicy: option?.policy ?? referrerPolicy[1] 
  };

  let response = await fetch(reqURL, options);

  if(response.status >= 400 && response.status < 500)
  {
    throw await response.json();
  }
  else if(response.status >= 500)
  {
    throw  ("internal server error"); 
  }

  return await response.json();
}


/**
 * @method patch
 * @param reqURL 
 * @param body 
 * @param headers 
 * @param option 
 * @returns object
 * @thorws exceptions
 */
async function patch(reqURL: string, body: object, headers?: HeadersInit, option?: optionSettings) : Promise<any>
{
  //Validations
  if(!!option?.mode && !requestMode.includes(option?.mode)) throw ("invalid Request mode");
  if(!!option?.cache && !requestCache.includes(option?.cache)) throw ("invalid Request cache");
  if(!!option?.credentials && !requestCredentials.includes(option?.credentials)) throw ("invalid Request credential");
  if(!!option?.redirect && !requestRedirect.includes(option?.redirect)) throw ("invalid Request redirect");
  if(!!option?.policy && !referrerPolicy.includes(option?.policy)) throw ("invalid Request policy");

  let options = {
    method: "PATCH",
    headers: headers ?? defaultHeaders,
    body: JSON.stringify(body),
    RequestMode: option?.mode ?? requestMode[1],
    RequestCache: option?.cache ?? requestCache[1], 
    RequestCredentials: option?.credentials ?? requestCredentials[1], 
    RequestRedirect: option?.redirect ?? requestRedirect[1],
    ReferrerPolicy: option?.policy ?? referrerPolicy[1] 
  };

  let response = await fetch(reqURL, options);

  if(response.status >= 400 && response.status < 500)
  {
    throw await response.json();
  }
  else if(response.status >= 500)
  {
    throw  ("internal server error"); 
  }

  return await response.json();
}


/**
 * @method _delete
 * @param reqURL 
 * @param headers 
 * @param option 
 * @returns object
 * @thorws exceptions
 */
 async function _delete(reqURL: string, headers?: HeadersInit, option?: optionSettings) : Promise<any>
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
     throw await response.json();
   }
   else if(response.status >= 500)
   {
     throw  ("internal server error"); 
   }
 
   return await response.json();
 }


/**
 * @method get
 * @param reqURL 
 * @param params 
 * @param headers 
 * @param option 
 * @returns object
 * @throws exceptions
 */
async function get(reqURL: string, params: object, headers?: HeadersInit, option?: optionSettings) : Promise<any>
{
  //Validations
  if(!!option?.mode && !requestMode.includes(option?.mode)) throw ("invalid Request mode");
  if(!!option?.cache && !requestCache.includes(option?.cache)) throw ("invalid Request cache");
  if(!!option?.credentials && !requestCredentials.includes(option?.credentials)) throw ("invalid Request credential");
  if(!!option?.redirect && !requestRedirect.includes(option?.redirect)) throw ("invalid Request redirect");
  if(!!option?.policy && !referrerPolicy.includes(option?.policy)) throw ("invalid Request policy");

  let options = {
    method: "GET",
    headers: headers ?? defaultHeaders,
    RequestMode: option?.mode ?? requestMode[1],
    RequestCache: option?.cache ?? requestCache[1], 
    RequestCredentials: option?.credentials ?? requestCredentials[1], 
    RequestRedirect: option?.redirect ?? requestRedirect[1],
    ReferrerPolicy: option?.policy ?? referrerPolicy[1] 
  };

  //Convert object to query string
  let request = !!params ? _objectToQueryString(params) : null;

  let response = await fetch(reqURL + request, options);

  if(response.status >= 400 && response.status < 500)
  {
    throw await response.json();
  }
  else if(response.status >= 500)
  {
    throw  ("internal server error"); 
  }

  return await response.json();
}


/**
* @method _objectToQueryString
* @param {*} obj 
* @return string
* convert object to query strings
*/
function _objectToQueryString(obj: object) : string
{
  let request = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');

  return "?" + request;
}


export const ASYNCFETCH = {
  post,
  get,
  put,
  patch,
  _delete 
};