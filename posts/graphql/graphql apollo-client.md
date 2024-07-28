# graphql apollo-client

## install

```sh
npm i @apollo/client graphql
```

## usage

```js
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));
```
