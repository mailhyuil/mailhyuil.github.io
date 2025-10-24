# 문제점

1. 최신 웹 어플리케이션은 대부분 비동기 작업으로 이루어집니다.

   > 비동기 작업은 복잡도가 상승합니다.

2. JS는 블로킹 문제를 콜백함수로 해결합니다.

   > 콜백지옥에 빠질 수 있습니다.

3. Promise를 사용하며 콜백지옥을 해결할 수 있습니다.
   > Promise는 둘 이상의 값을 생성하는 데이터 소스를 처리할 수 없습니다.
   >
   > > Promise는 불변이라 취소를 할 수 없습니다.

## Rxjs의 필요성

> for나 while같은 반복문은 비동기를 인식하지 못하므로 제대로 작동하지 않습니다.
>
> > try/catch의 중첩으로 에러 처리 전략이 복잡해집니다.
> >
> > > 이벤트 또는 장기 실행 작업이 멋대로 작동하거나 취소해야 할 상황임을 감지하기 어렵습니다.
> > >
> > > > 콜백지옥
> > > >
> > > > > 시스템 과부화
> > > > >
> > > > > > 메모리 누수

## rxjs 사용 이유

1. 순수성
2. 이벤트나 데이터가 흐르는 과정을 제어(pipe)
3. 결과 값을 각 단계별로 가공하는 과정을 거쳐 원하는 형태의 데이터가 반환되도록 할 수 있다.(pipe)

## rxjs 순서

1. Observable생성 콜백함수 내에서 fetch(비동기함수) 호출
2. next()에 데이터 넣기

```js
const observable = new Observable(observer => {
  fs.readFile("README.md", "utf-8", (err, data) => {
    observer.next(data);
  });
});
```

3. `.subscribe({next:콜백, complete:콜백, error:콜백})`

```js
observable.subscribe({
  next: data => {
    console.log(data);
  },
});
```
