# RestAPI PUT vs PATCH

> put은 멱등성을 가지고, patch는 멱등성을 가지지 않는다.
>
> > PATCH을 사용하려면 PATCH에 맞게 client UI를 변경해야한다.

## patch

```js
// patch request body
{
  username:'hyuil'
}
// 결과
{
  username:'hyuil'
  email: 'mailhyuil@gmail.com',
  password: '12341234'
}
```

## put

```js
// put request body
{
  username:'hyuil'
}
// 결과
{
  username:'hyuil'
  email: null,
  password: null
}
```
