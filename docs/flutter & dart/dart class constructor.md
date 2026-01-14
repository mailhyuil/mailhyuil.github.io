# dart class constructor

## final 필드 초기화

```dart
class User {
  final String name;
  final String category;

  // 생성자 뒤에 ':' 를 붙여서 사용
  User(String name)
    : name = name,
      category = 'General' {
    // 생성자 본문 (여기가 실행되기 전에 name과 category는 이미 초기화됨)
    print('User 객체 생성 완료');
  }
}
```

## named constructor

```dart
class User {
  final String name;
  final String category;

  // 생성자 뒤에 ':' 를 붙여서 사용
  User(String name)
    : name = name,
      category = 'General' {
    // 생성자 본문 (여기가 실행되기 전에 name과 category는 이미 초기화됨)
    print('User 객체 생성 완료');
  }

  // named constructor를 사용하면 생성자 이름을 지정할 수 있음
  User.helloWorld(String name)
    : name = name,
      category = 'General' {
    print('User 객체 생성 완료');
  }
}

// User.new : 기본생성자 호출 (User() 와 동일)
// User.helloWorld : named constructor 호출
```
