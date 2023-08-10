# flutter 광고

## install

```sh
flutter pub add admob_flutter
```

## android/app/src/main/AndroidManifest.xml

```xml
<manifest>
  <application>
    <meta-data
      android:name="com.google.android.gms.ads.APPLICATION_ID"
      android:value="ca-app-pub-1111111111111111~2222222222222"/>
  </application>
</manifest>
```

## ios/Runner/Info.plist

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-3940256099942544~1458002511</string>
<key>io.flutter.embedded_views_preview</key>
<true/>
<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
```

## ios/podfile

```ruby
platform :ios, '9.0'
```

## main.dart

```dart
import 'package:admob_flutter/admob_flutter.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  // Initialize without device test ids.
  Admob.initialize();
  // Or add a list of test ids.
  // Admob.initialize(testDeviceIds: ['YOUR DEVICE ID']);
}
```

## UI에 광고 추가

```dart
import 'package:flutter/material.dart';
import 'package:admob_flutter_example/extensions.dart'; // import the extension

class NewPage extends StatelessWidget {
  final String title;
  const NewPage({
    Key key,
    @required this.title,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
        brightness: Brightness.dark,
      ).withBottomAdmobBanner(context), // Add this
    );
  }
}
```
