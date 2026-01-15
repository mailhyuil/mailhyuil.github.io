# flutter base Key

- Key는 Flutter가 기존 State를 “재사용할지 말지” 판단하는 힌트다
- Widget Tree는 Type을 비교한 후 다르면 위젯 트리를 갱신한다. (참조값을 업데이트)
- Element Tree는 Key를 비교해 다르면 갱신한다. (Key를 넣지 않으면 항상 null이기 때문에 다르다고 판단하지 않는다.)
- Element Tree가 달라져야 RenderObject Tree가 달라진다. (즉 key가 같다면 RenderObject Tree는 달라지지 않는다.)
  그렇기 때문에 위젯에 고유의 key를 넣어두면 플러터가 key를 비교할 수 있게 해준다.
- 같은 종류의 위젯을 컬렉션에 더하거나, 제거하거나, 정렬할 때 키가 필요!
- Stateless는 변화가 없기 때문에 필요 없음

## 키의 종류

```txt
Key
 ├─ LocalKey
 │   ├─ ValueKey<T>
 │   ├─ ObjectKey
 │   └─ UniqueKey
 └─ GlobalKey<T extends State<StatefulWidget>>
     └─ PageStorageKey<T>
```

## 키의 용도

| Key       | 용도              |
| --------- | ----------------- |
| ValueKey  | 리스트 identity   |
| ObjectKey | 객체 identity     |
| GlobalKey | Form, Navigator.. |

## GlobalKey

- 전체 앱을 통틀어 유일한 키
- 위젯이 상태를 잃지 않으면서 부모를 바꿀 수 있도록 해줍니다.
- 특정 위젯의 정보를 완전히 다른 위젯트리에서 접근가능하게 해줄 수 있습니다. (State에 접근 가능)
- 서로 다른 2개의 화면에서 동일한 위젯을 동일한 상태를 유지하면서 보여주어야 할 때

```dart
final key = GlobalKey<FormState>();
key.currentState?.validate();
```

## ValueKey

- 값 기반 equality (==)
- 리스트/정렬 변경에 최적

```dart
ValueKey(todo.id)
```

## ObjectKey

- 객체 identity(메모리 참조) 기준
- == 무시
- 복합키를 key로 사용

```dart
ObjectKey({
    name: user.name,
    age: user.age,
})
```

## UniqueKey

- 매번 새 key
- 항상 다른 위젯으로 인식

```dart
UniqueKey()
```

## PageStorageKey

- 스크롤 위치를 키로 사용 / 스크롤 위치 유지
- 스크롤/페이지 상태 저장용
- 내부적으로 PageStorage(bucket) 사용
- 사실상 특수한 GlobalKey

```dart
PageStorageKey()
```

## super.key

- super.key는 상위 클래스의 생성자를 호출하여 해당 위젯에 부여된 키를 그대로 사용하는 것을 의미합니다.
- 이는 위젯 트리에서의 위치나 키의 유지를 위해 부모 클래스의 키를 재사용하고자 할 때 유용합니다.

```dart
MyCustomWidget({Key? key}) : super(key: key); // 해당 위젯이 받은 key를 super에게 바로 전송
MyCustomWidget({super.key}); // super의 key를 그대로 사용
```
