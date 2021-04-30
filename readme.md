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

###### Powered by [Nerdtrix.com](http://nerdtrix.com)