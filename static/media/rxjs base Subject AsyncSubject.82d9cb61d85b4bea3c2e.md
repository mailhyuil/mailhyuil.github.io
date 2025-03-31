# AsyncSubject

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
