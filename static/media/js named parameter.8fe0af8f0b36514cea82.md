# js named parameter

> js는 default로 positional parameter
>
> > object를 사용해서 named parameter를 구현할 수 있다.

```js
function hi({ name, age }) {
  console.log(name, age);
}

hi({
  age: 20,
  name: "sb",
});
```
