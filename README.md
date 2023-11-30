## unique-identity 

### Amazingly unique ids which are short and Perfect for Url Shorteners, Product SKUs, Socket Ids, Data Base Ids, SQL, MongoDB, PostGres, MySQL, MSSQL, Redis ids, and any other id users might see...


## Features
- Generates unique id's on multiple processes and machines even if called at the same time.
- With the Process ID, MAC Address and the combinations of current Time the ID's are unique even if called at the same time from multiple machines and processes.
- Set Pre-Fix in unique IDs.
- Set Post-Fix in unique IDs.

### Usage

```js
const id = require('unique-identity');

console.log(id.get());
// De3MOQxCZAdHpvx3pG
// Bukc9IfvI8mh10PD5G
// D1kxsCOHcwrrfEDGpG
// VzS-0jSpkgQr7AD9G
```

Mongoose Unique Id
```js
_id: {
  'type': String,
  'default': id.get()
},
```


### API

```js
const id = require('unique-identity');
```

---------------------------------------

__Example__

```js
users.insert({
  _id: id.get(),
  name: '...',
  email: '...'
});
```

---------------------------------------

## You can also set your custom 64 unique characters then unique id will be generated accordingly.
### Example

```js
const id = require('unique-identity');

let characters='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
id.characters(characters);

console.log(id.characters(characters));
// { status : true }

console.log(id.characters('duplicate characters of string'));
// { message: 'Duplicate characters found.', status: false }

console.log(id.characters('wrong length of string'));
// { message: 'Need 64 unique characters.', status: false }
```

---------------------------------------

## You can also set the Pre-Fix and Post-Fix characters too and the unique id will be generated accordingly.
### Example

```js
const id = require('unique-identity');

// To Set Pre-Fix

id.setPrefix(inputString);

console.log(id.setPrefix(inputString));
// { status : true }

console.log(id.setPrefix(/*invalid type input*/));
// { message: 'Invalid input type, Required string.', status: false }

console.log(id.setPrefix(/*input string length more than 50 chars*/));
// { message: 'Max chars limit is 50.', status: false }


// To Set Post-Fix

id.setPostfix(inputString);

console.log(id.setPostfix(inputString));
// { status : true }

console.log(id.setPostfix(/*invalid type input*/));
// { message: 'Invalid input type, Required string.', status: false }

console.log(id.setPostfix(/*input string length more than 50 chars*/));
// { message: 'Max chars limit is 50.', status: false }

```

## Pre-Fix & Post-Fix Examples

```js

//Pre-Fix

id.setPrefix('SKU_');
console.log(id.get());
// SKU_De3MOQxCZAdHpvx3pG
// SKU_Bukc9IfvI8mh10PD5G
// SKU_D1kxsCOHcwrrfEDGpG


//Post-Fix

id.setPostfix('_postFix');
console.log(id.get());
// De3MOQxCZAdHpvx3pG_postFix
// Bukc9IfvI8mh10PD5G_postFix
// D1kxsCOHcwrrfEDGpG_postFix


//For Both
id.setPrefix('SKU_');
id.setPostfix('_postFix');

console.log(id.get());
// SKU_De3MOQxCZAdHpvx3pG_postFix
// SKU_Bukc9IfvI8mh10PD5G_postFix
// SKU_D1kxsCOHcwrrfEDGpG_postFix

//To Unset the Pre-Fix or Post-Fix

id.setPrefix('');// it will unset prefix
id.setPostfix('');// it will unset postfix

```
