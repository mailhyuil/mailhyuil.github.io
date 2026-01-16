# flutter permission_handler

## install

```sh
dart pub add permission_handler
```

## status

```txt
status.isGranted = 허용
status.isDenied  = 거절
status.isProvisional = 임시 허용
status.isPermanentlyDenied = 영구 거절 (두번 거절 시)
status.isLimited = 제한
status.isRestricted = 제한 (자녀보호 등)
```

## usage

```dart
import 'package:permission_handler/permission_handler.dart';

PermissionStatus status = await Permission.location.request();

if (status.isGranted) {
  // 허용
} else {
  // 거절
  if (status.isPermanentlyDenied) {
    // 영구 거절 (두번 거절 시)
    openAppSettings(); // 설정으로 이동
  }
}
```
