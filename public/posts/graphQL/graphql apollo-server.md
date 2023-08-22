## graphql apollo-server

### install

```sh
npm i apollo-server graphql
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
