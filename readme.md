# fetchasync React Module

## Overview
fetchasync provides a way to fetch modern API using await/async. 

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

###### Get request example

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

###### get optional params
- URL string required
- Params object obtional
- headers object optional
- options object optional


###### Post request example

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

###### post optional params
- URL string required
- body object required
- headers object optional
- options object optional



###### Put request example

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
###### put optional params
- URL string required
- body object required
- headers object optional
- options object optional

###### Patch request example

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

###### patch optional params
- URL string required
- body object required
- headers object optional
- options object optional

###### Delete request example

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

###### _delete optional params
- URL string required
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
    mode: "cors",
    cache: "default",
    credentials: "include",
    redirect: "follow",
    policy: "no-referrer-when-downgrade"
}
```

###### Powered by [Nerdtrix.com](http://nerdtrix.com)