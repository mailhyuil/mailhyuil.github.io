# Observer

> Observable에게 전달받은 값의 consumer
>
> > Obserable.subscribe(Observer) 방식으로 사용

## 구성

```
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
```
