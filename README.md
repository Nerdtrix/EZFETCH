# Fetchasync ![npm package](https://img.shields.io/badge/npm-1.0.3-red.svg)

## Overview
Fetchasync is a lightweight package created with typescript that provides an easy way to fetch modern API using await/async. 



## Features
- Uses await/async
- Has default configuration for common Json API
- Errors 400 >= will go to the catch by default.
- Errors 200 will stay within the try. 
- Created with Typescript
- Fixes common curls errors by default. 

## Usage

###### Installation

```npm i fetchasync```

###### Update
```npm update fetchasync```

###### Import

```import { FETCHASYNC } from 'fetchasync';```

## Examples

#### GET request

- Simple get request without optional params
```js
const getRequest = async () => 
{
    try
    {
        let response = await FETCHASYNC.get("myURL");

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
```

- Url with params, custom headers, and custom options
```js
const getRequest = async () => 
{
    try
    {
        let params = {
            "example": "test"
        };

        let headers = {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        };
        
        let options = {
            "mode": "cors",
            "cache": "default",
            "credentials": "include",
            "redirect": "follow",
            "policy": "no-referrer-when-downgrade"
        }

        let response = await FETCHASYNC.get("myURL", params, true, headers, options);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
```
- To fetch an URL with params ex: http://myURL.com?example=test use the following example
```js
let response = await FETCHASYNC.get("http://myURL.com", {"example" "test"});
```


###### Available GET params
- URL string required
- Params object obtional
- returnJson boolean obtional
- headers object optional
- options object optional


#### POST request

- Simple POST request without optional params

```js
const postRequest = async () => 
{
    try
    {
        let body = {
            example: "example"
        };

        let response = await FETCHASYNC.post("myURL", body);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

```
- POST request with custom headers and custom options
```js
const postRequest = async () => 
{
    try
    {
        let body = {
            example: "example"
        };

        let headers = {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        };
        
        let options = {
            "mode": "cors",
            "cache": "default",
            "credentials": "include",
            "redirect": "follow",
            "policy": "no-referrer-when-downgrade"
        }

        let response = await FETCHASYNC.post("myURL", body, true, headers, options);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
```

###### Available POST params
- URL string required
- body object required
- returnJson boolean obtional
- headers object optional
- options object optional



#### PUT request

- Simple PUT request without optional params

```js
const putRequest = async () => 
{
    try
    {
        let body = {
            example: "example"
        };

        let response = await FETCHASYNC.put("myURL", body);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

```
- PUT request with custom headers and custom options
```js
const putRequest = async () => 
{
    try
    {
        let body = {
            example: "example"
        };

        let headers = {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        };
        
        let options = {
            "mode": "cors",
            "cache": "default",
            "credentials": "include",
            "redirect": "follow",
            "policy": "no-referrer-when-downgrade"
        }

        let response = await FETCHASYNC.put("myURL", body, true, headers, options);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
```

###### Available PUT params
- URL string required
- body object required
- returnJson boolean obtional
- headers object optional
- options object optional

#### PATCH request

- Simple PATCH request without optional params
```js
const patchRequest = async () => 
{
    try
    {
        let body = {
            example: "example"
        };

        let response = await FETCHASYNC.patch("myURL", body);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

```
- PATCH request with custom headers and custom options
```js
const patchRequest = async () => 
{
    try
    {
        let body = {
            example: "example"
        };

        let headers = {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        };
        
        let options = {
            "mode": "cors",
            "cache": "default",
            "credentials": "include",
            "redirect": "follow",
            "policy": "no-referrer-when-downgrade"
        }

        let response = await FETCHASYNC.patch("myURL", body, true, headers, options);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
```

###### Available PATCH params
- URL string required
- body object required
- returnJson boolean obtional
- headers object optional
- options object optional

#### DELETE request

- Simple DELETE request without optional params
```js
const deleteRequest = async () => 
{
    try
    {
        let response = await FETCHASYNC._delete("myURL");

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

```
- DELETE request with custom headers and custom options
```js
const deleteRequest = async () => 
{
    try
    {
        let headers = {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        };
        
        let options = {
            "mode": "cors",
            "cache": "default",
            "credentials": "include",
            "redirect": "follow",
            "policy": "no-referrer-when-downgrade"
        }

        let response = await FETCHASYNC._delete("myURL", true, headers, options);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

```

###### Available DELETE params
- URL string required
- returnJson boolean obtional
- headers object optional
- options object optional


## Default optional configuration

###### Headers
```json
{
  "Content-Type" : "application/json",
  "Accept" : "application/json"
}
```

###### Options
```json
{
    "mode": "cors",
    "cache": "default",
    "credentials": "include",
    "redirect": "follow",
    "policy": "no-referrer-when-downgrade"
}
```

## Params details
- URL: This parameter is to specify the URL that will be fetch
- returnJson: This parameter is to specify if we are waiting for a json response or a promise. If false a promise will be returned. If true a JSON server response is expected. 
- headers: This parameter is to specify the headers required to fetch the API. See **Headers** above to see the default headers.
- options: This parameter is to specify the type of fetch configuration. See **Options** above to see the default fetch config.

## Credits
This module was inspired and created by [@jerryurenaa](http://jerryurenaa.com)


## License
Fetchasync is [MIT](https://github.com/Nerdtrix/FetchAsync/blob/main/LICENSE.md) licensed.


###### Powered by [Nerdtrix.com](http://nerdtrix.com)