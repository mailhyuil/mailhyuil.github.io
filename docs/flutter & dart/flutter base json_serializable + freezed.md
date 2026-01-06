# flutter base JsonSerializable

> getter, equals, copyWith, toJson을 자동으로 생성해줌

## install

```sh
flutter pub add json_annotation
flutter pub add freezed_annotation

flutter pub add json_serializable --dev
flutter pub add freezed --dev
flutter pub add build_runner --dev

# 한번 빌드
flutter pub run build_runner build
# 자동 빌드
flutter pub run build_runner watch
# 충돌 발생 시
flutter pub run build_runner build --delete-conflicting-outputs
```

## user_model.dart

```dart
import 'package:freezed_annotation/freezed_annotation.dart';

// flutter pub run build_runner watch 시 생성
part 'user.freezed.dart';
part 'user.g.dart'; // fromJson이 있어야 생성됨

@freezed
class User with _$User {
  const factory User({
    required int id,
    required String name,
    required String email,
  }) = _User;

  factory User.fromJson(Map<String, dynamic> json) =>
      _$UserFromJson(json);
}

```

## Key Mapping

```dart
const factory User({
  required int id,
  @JsonKey(name: 'user_name') required String name,
}) = _User;
```

## Nullable

```dart
const factory User({
  required int id,
  String? nickname,
  @Default(false) bool isAdmin,
}) = _User;
```

## List

```dart
@freezed
class Post with _$Post {
  const factory Post({
    required int id,
    required User author,
    required List<String> tags,
  }) = _Post;

  factory Post.fromJson(Map<String, dynamic> json) =>
      _$PostFromJson(json);
}
```

## Union Type

```dart
@freezed
sealed class ApiState<T> with _$ApiState<T> {
  const factory ApiState.loading() = Loading;
  const factory ApiState.success(T data) = Success<T>;
  const factory ApiState.error(String message) = Error;
}
// 사용
// state.when(
//   loading: () => CircularProgressIndicator(),
//   success: (data) => Text(data.toString()),
//   error: (msg) => Text(msg),
// );
```
