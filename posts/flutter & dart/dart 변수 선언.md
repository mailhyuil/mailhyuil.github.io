# dart 변수 선언

## 변수 선언

```dart
var name = "홍길동";
String name = "홍길동";

// 상수 선언
// js의 const와 같다
final name = "홍길동";
final String name = "홍길동";

// late 선언
// 나중에 초기화
// API에서 데이터를 받아서 채워넣을 때 사용
// js에서 const를 사용하면 선언시 값을 넣어줘야 하지만 dart에서는 late를 사용해 나중에 값을 넣어줘도 된다
late final String name = "홍길동";

// const 선언 (상수 선언)
// js의 const와 다르다
// 값을 이미 알고있는 것
// 컴파일 타임에 상수로 선언
const name = "홍길동";
```

## dynamic

```dart
dynamic name = "홍길동";

if(name is String){
    print("name is String");
}
```

## null safety

> null로 인해서 발생하는 런타임 에러를 방지하기 위해 컴파일 이전에 에러를 내는 것

```dart
String name = '홍길동';
name = null; // error

String? name = '홍길동';
name = null; // ok
```
