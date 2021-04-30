# Powered by Nerdtrix.com

## Installation

```npm i fetchasync```

## Import

```import { FETCHASYNC } from 'fetchasync';```

## Get Example

```js
const get = async () => 
{
    try
    {
        let response = await FETCHASYNC.get("myURL", []);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

```

## POST Example

```js
const post = async () => 
{
    try
    {
        let postParams = {
            username: "example",
            email: "example"
        };

        let response = await FETCHASYNC.post("myURL", postParams);

        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

```