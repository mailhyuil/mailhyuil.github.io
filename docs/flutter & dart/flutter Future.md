# flutter Future

> Promise와 비슷한 개념이다. 비동기 작업을 수행할 때 사용한다.
>
> > `Future<T>` // T는 반환값의 타입

```dart
Future<User> getUser(){
    return Future.delayed(Duration(seconds: 1), () => User('홍길동', 20));
}
```
