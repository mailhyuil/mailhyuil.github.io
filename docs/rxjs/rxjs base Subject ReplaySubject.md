# rxjs base Subject ReplaySubject

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
