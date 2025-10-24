# rxjs base Subject

> Observer이면서 Observable이다.
>
> > 실시간으로 Observable에 값을 추가하고 Subscriber에게 방출할 수 있다.
> >
> > > Cold Observable을 Hot Observable로 변환할 수 있다.

```js
const subject = new Subject();

subject.subscribe((data) => console.log(data));

subject.next(1);
```
