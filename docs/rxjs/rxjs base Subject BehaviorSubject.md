# rxjs base Subject BehaviorSubject

> subscribe 될때 가장 최신의 .next 이벤트를 전달합니다.
>
> > 구독한 다음 값부터 방출
> >
> > > 항상 최신의 .next 이벤트를 방출하기 때문에 초기값 없이는 만들 수 없습니다.
> >
> > > > 사용 : 항상 최신 데이터로 채워놓아야 하는 경우에 사용 (유저 프로필)

```js
const behaviorSubject = new BehaviorSubject(1);

behaviorSubject.subscribe((data) => {
  console.log(data);
});

behaviorSubject.next(2);

behaviorSubject.subscribe((data) => {
  console.log(data);
});

behaviorSubject.next(3);
```
