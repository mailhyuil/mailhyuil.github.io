# graphql base query

## Query

> Get

```gql
query getUser {
  user(id: 1) {
    id
    name
    age
  }
}
```

## Mutation

> Post, Put, Patch, Delete

```gql
mutation createUser {
  createUser(id: 1, name: "user1", age: 20) {
    id
    name
    age
  }
}
```
