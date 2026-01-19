# flutter 국제화 - enum

## arb 파일 작성

```arb
{
  "male": "M",
  "female": "F"
}
```

## extension 작성

```dart
// 성별 코드 열거형
import 'package:flutter/widgets.dart';
import 'package:hit_me_up/l10n/app_localizations.dart';

enum Gender { male, female }

extension GenderUI on Gender {
  // 1. 이름을 tr(translation)이나 label로 짓는 것이 관례입니다.
  // 2. static이 아니어야 Gender.male.tr(context) 식으로 호출 가능합니다.
  String tr(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    return switch (this) {
      Gender.male => l10n.male,
      Gender.female => l10n.female,
    };
  }
}

extension GenderCoder on Gender {
  // 서버 저장용 코드값 (M, F)
  String get code => switch (this) {
    Gender.male => 'M',
    Gender.female => 'F',
  };

  // 서버에서 받은 코드('M')를 다시 Enum으로 바꿀 때 (static 필수)
  static Gender fromCode(String code) {
    return switch (code) {
      'M' => Gender.male,
      'F' => Gender.female,
      _ => throw ArgumentError('Unknown gender code: $code'),
    };
  }

  // Enum을 서버에 저장할 때 코드값('M')으로 변환 (static 필수)
  static String toCode(Gender gender) {
    return switch (gender) {
      Gender.male => Gender.male.code,
      Gender.female => Gender.female.code,
    };
  }
}
```

## 사용

```dart
Text(UserStatus.active.tr(context)) // "활성" 출력
```
