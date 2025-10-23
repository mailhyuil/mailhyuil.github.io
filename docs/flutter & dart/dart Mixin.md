# dart Mixin

> interface와 비슷
>
> > with 키워드 사용

```dart
class Quackable {
  void quack() {
    print('quack');
  }
}

class Flyable {
  void fly() {
    print('fly');
  }
}

class Duck with Quackable, Flyable {
  void swim() {
    print('swim');
  }
}
```
