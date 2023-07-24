# dart factory 메서드

> factory 키워드는 Dart에서 클래스의 생성자를 정의하는 특별한 종류의 메서드를 표시하는 데 사용
>
> > factory 생성자는 클래스의 인스턴스를 반환하는데 사용
> >
> > > 주요 목적은 객체 생성 과정을 제어하고, 필요에 따라 캐싱된 인스턴스를 반환하거나 서브클래스의 인스턴스를 반환하는 등의 유연한 로직을 구현하는 것

```dart
class MyDateTime {
  final int year;
  final int month;
  final int day;

  MyDateTime(this.year, this.month, this.day);

  factory MyDateTime.now() {
    final now = DateTime.now();
    return MyDateTime(now.year, now.month, now.day);
  }
}
```
