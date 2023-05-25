# rxjs subject

> Observer이면서 Observable이다.
>
> > 실시간으로 Observable에 값을 추가하고 Subscriber에게 방출할 수 있다.
> >
> > > Cold Observable을 Hot Observable로 변환할 수 있다.

## BehaviorSubject

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

## ReplaySubject

> ReplaySubject는 bufferSize 개의 이벤트를 저장해 '처음부터 다시 방출'
>
> > 사용 : 최신의 여러 값들을 보여주고 싶을 때 사용 (최근 검색어)

```js
const replaySubject = new ReplaySubject(3); // 3개 까지만 저장

replaySubject.subscribe((data) => console.log(data));

replaySubject.next(1);

replaySubject.subscribe((data) => console.log(data));

replaySubject.next(2);
```

## AsyncSubject

> 완료되었을 때만 값을 방출하는 Subject
>
> > 완료 시 마지막 값을 모든 옵저버들에게 보내준다.

```js
const asyncSubject = new AsyncSubject();

asyncSubject.subscribe({
  next: (data) => console.log(data),
});

asyncSubject.next(1);

asyncSubject.complete();
```
