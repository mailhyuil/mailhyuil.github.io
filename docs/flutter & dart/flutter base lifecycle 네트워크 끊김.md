# flutter base lifecycle 네트워크 끊김

## install

```sh
dart pub add connectivity_plus
```

## usage

```dart
import 'package:connectivity_plus/connectivity_plus.dart';

final connectivity = Connectivity();

connectivity.onConnectivityChanged.listen((ConnectivityResult result) {
  if (result == ConnectivityResult.none) {
    onNetworkDisconnected();
  }
  else if (result == ConnectivityResult.mobile) {
    onMobileNetworkConnected();
  }
  else if (result == ConnectivityResult.wifi) {
    onWifiNetworkConnected();
  }
});
```
