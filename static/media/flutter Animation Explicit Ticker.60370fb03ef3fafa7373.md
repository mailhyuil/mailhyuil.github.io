# flutter Animation Explicit Ticker

> Animation의 프레임
>
> > Ticker는 다른 페이지로 이동해도 계속 동작한다.
> >
> > > 다시 돌아오면 새로운 Ticker가 생성된다. (두개의 Ticker가 동작한다... 메모리 낭비)
> > >
> > > > 이를 해결하기 위한 것이 with SingleTickerProviderStateMixin이다.

```dart
Ticker((elapsed) => print(elapsed)).start();
```
