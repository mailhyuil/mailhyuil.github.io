# graphql resolver

## type 정의

```gql
type Query {
  numberSix: Int! # Should always return the number 6 when queried
  numberSeven: Int! # Should always return 7
}
```

## resolver 정의

```js
const resolvers = {
  Query: {
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
  },
};
```
