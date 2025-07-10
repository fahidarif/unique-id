## unique-identity 

### Amazingly unique ids which are short and Perfect for Url Shorteners, Product SKUs, Socket Ids, Data Base Ids, SQL, MongoDB, PostGres, MySQL, MSSQL, Redis ids, Front-End Temp IDs and any other id users might see...


## Features
- Generates unique id's on multiple processes and machines even if called at the same time.
- With the Process ID, MAC Address and the combinations of current Time the ID's are unique even if called at the same time from multiple machines and processes.
- Set Pre-Fix in unique IDs.
- Set Post-Fix in unique IDs.
- ### Now With Typescript Support 🥳
- Now any typescript based Environment can easily use unique-identity 🤩

### Usage

```ts
//JavaScript
const id = require('unique-identity');
//Or
const { characters, get } = require('unique-identity');


console.log(id.get());
// De3MOQxCZAdHpvx3pG
// Bukc9IfvI8mh10PD5G
// D1kxsCOHcwrrfEDGpG
// VzS-0jSpkgQr7AD9G
```


```ts
//TypeScript
import { characters, get } from 'unique-identity';
//Or
import * as id from 'unique-identity';
//Or
import id from 'unique-identity';

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
//JavaScript
const id = require('unique-identity');
//Or
const { characters, get } = require('unique-identity');

//TypeScript
import { characters, get } from 'unique-identity';
//Or
import * as id from 'unique-identity';
//Or
import id from 'unique-identity';
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

//JavaScript
const id = require('unique-identity');
//Or
const { characters, get } = require('unique-identity');

//TypeScript
import { characters, get } from 'unique-identity';
//Or
import * as id from 'unique-identity';
//Or
import id from 'unique-identity';

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
//JavaScript
const id = require('unique-identity');
//Or
const { characters, get } = require('unique-identity');

//TypeScript
import { characters, get } from 'unique-identity';
//Or
import * as id from 'unique-identity';
//Or
import id from 'unique-identity';

```

## Pre-Fix & Post-Fix Examples

```js

//Pre-Fix

console.log(id.get('SKU_'));
// SKU_De3MOQxCZAdHpvx3pG
// SKU_Bukc9IfvI8mh10PD5G
// SKU_D1kxsCOHcwrrfEDGpG


//Post-Fix

console.log(id.get('', '_postFix'));
// De3MOQxCZAdHpvx3pG_postFix
// Bukc9IfvI8mh10PD5G_postFix
// D1kxsCOHcwrrfEDGpG_postFix


//For Both

console.log(id.get('SKU_', '_postFix'));
// SKU_De3MOQxCZAdHpvx3pG_postFix
// SKU_Bukc9IfvI8mh10PD5G_postFix
// SKU_D1kxsCOHcwrrfEDGpG_postFix

//To Unset the Pre-Fix or Post-Fix

```
