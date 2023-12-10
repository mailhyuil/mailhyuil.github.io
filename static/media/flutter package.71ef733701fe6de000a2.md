# flutter package

## flutter pub

> flutter의 패키지 관리 명령어
>
> > dart pub과 동일

```sh
flutter pub add
flutter pub add --dev
flutter pub get
flutter pub upgrate
flutter pub outdated
flutter pub publish
```

## pubspec.yaml

> dependencies를 직접 추가

## package 불러오기

> import 구문 사용

```dart
import 'package:http/http.dart' as http;

void getSomething(){
//    get(url) // as http 미사용
      http.get(url) // http 사용
}
```

## 필수 패키지

```sh
# http
dio
http

# 상태관리
provider
get

# rx
rx_dart

# image
image_picker
image_cropper
cached_network_image

# svg
flutter_svg

# font
google_fonts

# local database
shared_preferences
sqflite
hive

# info
package_info_plus
device_info_plus

# 권한
permission_handler

#webview
webview_flutter

# chart
charts_flutter

# map
google_maps_flutter

# path
path_provider

# url
url_launcher

# push notification
flutter_local_notifications

# icon
flutter_launcher_icons

# location
geolocator

# format
intl

# animation
animated_text_kit
animations

# firebase
firebase_core
firebase_messaging
firebase_analytics
firebase_crashlytics
firebase_auth
firebase_dynamic_links
```
