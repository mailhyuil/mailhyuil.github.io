# flutter 국제화 - slang

## install

```sh
dart pub add slang
dart pub add slang_flutter

dart pub add slang_build_runner --dev

dart run slang
dart run slang clean
```

## slang.yaml

```yaml
base_locale: ko
fallback_strategy: base_locale
input_directory: lib/i18n
input_file_pattern: .i18n.json # .i18n.json으로 끝나는 모든 파일을 읽음
output_directory: lib/i18n
output_file_name: strings.g.dart
output_format: dart

# 파일별로 네임스페이스를 생성 (예: t.countries.kr)
namespaces: true
# _default_.i18n.json 파일을 기본 언어로 사용
# countries.i18n.json 파일을 국가별 언어로 사용
# languages.i18n.json 파일을 언어별 언어로 사용
```

## lib/i18n/_default_en.i18n.json

```json
{
  "hello": "Hello"
}
```

## lib/i18n/_default_ko.i18n.json

```json
{
  "hello": "안녕하세요"
}
```

## main.dart

```dart
import 'i18n/strings.g.dart'; // 생성된 파일 import

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // 1. 디바이스 언어 설정을 읽거나 초기화
  LocaleSettings.useDeviceLocale(); 
  
  runApp(
    TranslationProvider( // 2. Provider로 감싸기
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // 3. 현재 설정된 locale 적용
      locale: TranslationProvider.of(context).flutterLocale, 
      supportedLocales: AppLocaleUtils.supportedLocales,
      localizationsDelegates: GlobalMaterialLocalizations.delegates,
      home: const HomeScreen(),
    );
  }
}
```

## map

```dart
final sortedLanguages = t.languages.typedMap.values.toList()
  ..sort((a, b) => a.name.compareTo(b.name));
```
