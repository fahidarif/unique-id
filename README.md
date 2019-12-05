## @unique/id 

> Amazingly unique ids which are short and Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see..
### Usage

```js
const id = require('@unique-id');

console.log(id.get());
```

Mongoose Unique Id
```js
_id: {
  'type': String,
  'default': id.get()
},
```



### Example

```bash
~/projects/shortid ❯ node examples/examples.js
cwefeWRhpRV
23TplPdS2-_
46Juzcyxd3C
```



### API

```js
const id = require('@unique-id');
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

#### `shortid.characters(string)`

__Default:__ `'-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz_'`

__Returns__ new alphabet as a `string`
