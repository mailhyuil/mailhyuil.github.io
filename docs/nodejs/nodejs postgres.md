# nodejs postgres

## install

```sh
yarn add pg
```

## main.js

```js
const { Client } = require('pg');

const main = async () => {
  const client = new Client({
    user: 'postgres',
    password: '1234',
    database: 'mydb',
    host: 'localhost',
    port: '5432',
  });
  await client.connect();

  const res = await client.query('SELECT * FROM "User"'); // User는 예약어이기 때문에 ""로 감싸줌

  console.log(res.rows);

  await client.end();
};

main();
```

## sql injection

```ts
const injected = `' OR '' = '`;
const query = `DELETE FROM users WEHRE name = '${injected}'`;
// '' OR '' = '' 이렇게 만들어 버린다...
await client.query(query);
// users가 전부 삭제됨
```

### 방어 코드

```ts
const query = `DELETE FROM users WEHRE name = $1::text`;
await client.query(query, [injected]);
```
