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

## 필수 패키지

```
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

# font
google_fonts
# svg
flutter_svg

# firebase
firebase_core
firebase_messaging
firebase_analytics
firebase_crashlytics
firebase_auth
firebase_dynamic_links

# info
package_info_plus
device_info_plus

# 권한
permission_handler

# local database
shared_preferences
sqflite
hive

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

```
