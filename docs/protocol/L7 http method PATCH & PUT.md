# L7 http method PATCH & PUT

> put은 항상 멱등성을 가져야하고, patch는 멱등성을 가질 수 도 있고 가지지 않을 수도 있다.
>
> > PATCH을 사용하려면 PATCH에 맞게 client UI를 변경해야한다.

## PATCH

> 부분 수정 시 사용
>
> > operator 방식으로도 사용할 수 있기 때문에 이 경우 멱등성이 보장 안될 수 있음
> >
> > > Patch는 멱등성이 보장안될 수 있고 사용 방식이 다양하기에 유연성은 있지만, 이해하기가 어려울 수 있다.
> > >
> > > API 문서화, 테스트 난이도가 높아진다.

```js
// Partial Update (Json Merge Patch)
{
  username:'hyuil'
}
// 결과
{
  username:'hyuil'
  email: 'mailhyuil@gmail.com',
  password: '12341234'
}

// Json Patch
[
  { op: "replace", path: "/nickname", value: "newName" },
  { op: "remove", path: "/age" },
  { op: "add", path: "/tags/0", value: "dev" },
];

// 멱등성이 보장 안되는 방식
{
  point: '+4',
}
{
  increment: 4
}
```

## PUT

> body로 전체 resource를 덮어쓰기하는 방식으로 멱등성을 구현
>
> > 보완 설계를 위해 id는 제외하기도 한다.
> >
> > > PUT은 항상 리소스의 프로퍼티=값을 보내야하고 멱등성을 보장하기 때문에 이해하기가 쉽다.

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
