## unique-identity 

> Amazingly unique ids which are short and Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see..


## Features
- Generates unique id's on multiple processes and machines even if called at the same time.
- With the Process ID, MAC Address and the combinations of current Time the ID's are unique even if called at the same time from multiple machines and processes.

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

> You can also set your custom 64 unique characters then unique id will be generated accordingly.
### Example

```js
const id = require('unique-identity');

let characters='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
id.characters(characters);

console.log(id.characters(characters));
// { status : true }

console.log(id.characters('duplicate characters of string'));
// { message: 'duplicate characters found!', status: false }

console.log(id.characters('wrong length of string'));
// { message: 'need 64 unique characters!', status: false }
```