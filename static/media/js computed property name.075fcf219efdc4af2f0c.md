# js computed property name (key)

> property key에 []를 넣으면 key를 동적으로 결정할 수 있다.

```js
const key = "name";
const obj = {
  [key]: "hyuil",
};

// obj = { name: "hyuil" }
```

## usecase

```js
// SINGLE EVENT HANDLER
handleChange = event => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
};
```
