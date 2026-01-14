# dart Mixin

- 클래스들에 특정 기능을 끼워넣기 위해 사용합니다. (객체 생성 불가)
- extends = is-a 관계
- mixin = has-a 관계

## with 키워드 사용

```dart
mixin Flyable {
  void fly() => print("하늘을 납니다");
}

mixin Swimable {
  void swim() => print("헤엄을 칩니다");
}

// 오리는 날 수도 있고, 헤엄칠 수도 있습니다. (다중 조립)
class Duck extends Animal with Flyable, Swimable { }
```

## on 키워드 사용

특정 클래스(또는 그 자식들)에게만 mixin을 허용

```dart
class Robot {
  void charge() => print("충전 중...");
}

// 이 mixin은 오직 Robot 클래스를 상속받은 클래스에서만 사용할 수 있음
mixin LaserBeam on Robot {
  void shoot() {
    charge(); // Robot의 기능을 미리 알고 쓸 수 있음
    print("레이저 발사!");
  }
}

// 가능: Robot을 상속받았으므로 LaserBeam 장착 가능
class CombatRobot extends Robot with LaserBeam { }

// 에러: Animal은 Robot이 아니므로 LaserBeam을 장착할 수 없음
// class SuperDog extends Animal with LaserBeam { }
```
