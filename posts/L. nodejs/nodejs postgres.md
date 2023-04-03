# nodejs postgres

## install

```
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

  const res = await client.query('SELECT $1::text as message', ['Hello world!']);
  console.log(res.rows[0].message); // Hello world!
  await client.end();
};

main();
```
