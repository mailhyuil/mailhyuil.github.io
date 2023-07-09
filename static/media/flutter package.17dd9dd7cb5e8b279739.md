# flutter package

## dart pub

> pub.dev에 있는 패키지들을 사용할 수 있습니다.

```
pub get
pub upgrate
pub outdated
pub publish
```

## flutter pub

> flutter pub은 dart pub의 기능을 포함하고 있습니다.

## pubspec.yaml

> dependencies를 직접 추가

## package 불러오기

> import 구문 사용

```
import 'package:http/http.dart' as http;

void getSomething(){
//    get(url) // as http 미사용
      http.get(url) // http 사용
}
```
