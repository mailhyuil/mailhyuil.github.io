# js switch

> 조건이 3개 이상이면 switch를 고려
>
> > switch문은 jump table을 사용 if else보다 빠름
> >
> > > break를 꼭 넣자 break가 없으면 마지막 case까지 다 훑는다.

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    break

  case 'value2':  // if (x === 'value2')
    ...
    break

  default:
    ...
    break
}
```
