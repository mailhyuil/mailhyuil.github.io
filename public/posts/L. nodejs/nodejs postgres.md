# nodejs postgres

## install

```sh
yarn add pg
```

## main.js

```js
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: '1234',
  database: 'mydb',
});

const main = async () => {
  await client.connect();

  const res = await client.query('SELECT * FROM "User"');
  
  await client.end();
};

main();
```
