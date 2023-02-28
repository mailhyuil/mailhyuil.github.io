# GraphQL

## REST의 문제점

### over-fetching

> 필요없는 너무 많이 많은 데이터를 받는 것
>
> > graphQL은 필요한 '데이터'를 요청하기에 overFetching할 일이 없다.
> >
> > > you will get only what you asked for

### under-fetching

> 우리가 필요한 데이터보다 덜 받는 것
>
> > ex) 필요한 데이터의 id만 받는 경우 다시 요청해야한다.

## apollo-server

### install

```
npm i apollo-server
```

### server.js

```js
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    text: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`running on ${url}`);
});
```
