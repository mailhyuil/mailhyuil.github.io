# flutter base native MethodChannel

- Dart와 네이티브 코드(Java, Kotlin, Swift, Objective-C) 간의 통신을 처리
- 네이티브 코드와의 통합 방법
- MethodChannel은 **바이너리 메시징(Binary Messaging)**을 기반으로 동작
- 클라이언트(Flutter): 통로의 이름을 지정하고 특정 메서드 호출과 인자를 보냅니다.
- 호스트(Android/iOS): 해당 이름을 가진 채널에서 메시지를 수신하여 로직을 처리한 후 결과를 다시 보냅니다.

## dart

- 실제 배터리 잔량(Battery Level)을 가져오는 함수 예시

```dart
import 'package:flutter/services.dart';

class BatteryPlatform {
  // 채널 이름은 고유해야 하므로 보통 패키지명을 포함합니다.
  static const platform = MethodChannel('com.example.app/battery');

  Future<void> getBatteryLevel() async {
    try {
      // 'getBatteryLevel'이라는 이름의 메서드 호출
      final int result = await platform.invokeMethod('getBatteryLevel');
      print('배터리 잔량: $result%');
    } on PlatformException catch (e) {
      print("에러 발생: '${e.message}'.");
    }
  }
}
```

## android

- MainActivity.kt

```kotlin
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class MainActivity: FlutterActivity() {
    private val CHANNEL = "com.example.app/battery"

    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
            call, result ->
            if (call.method == "getBatteryLevel") {
                val batteryLevel = 80 // 실제 배터리 측정 로직 대체
                result.success(batteryLevel)
            } else {
                result.notImplemented()
            }
        }
    }
}
```

## ios

- AppDelegate.swift

```swift
import UIKit
import Flutter

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {

    // 1. Controller 및 Channel 설정
    let controller : FlutterViewController = window?.rootViewController as! FlutterViewController
    let batteryChannel = FlutterMethodChannel(name: "com.example.app/battery",
                                              binaryMessenger: controller.binaryMessenger)

    // 2. 핸들러 등록
    batteryChannel.setMethodCallHandler({
      (call: FlutterMethodCall, result: @escaping FlutterResult) -> Void in

      // 3. 호출된 메서드 이름 확인
      if (call.method == "getBatteryLevel") {
        self.receiveBatteryLevel(result: result)
      } else {
        result(FlutterMethodNotImplemented)
      }
    })

    GeneratedPluginRegistrant.register(with: self)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  // 4. 실제 네이티브 로직 처리 함수
  private func receiveBatteryLevel(result: FlutterResult) {
    let device = UIDevice.current
    device.isBatteryMonitoringEnabled = true

    if device.batteryState == .unknown {
      result(FlutterError(code: "UNAVAILABLE",
                          message: "배터리 정보를 가져올 수 없습니다.",
                          details: nil))
    } else {
      // 결과값 전달 (0.0 ~ 1.0 사이의 값이므로 100을 곱함)
      result(Int(device.batteryLevel * 100))
    }
  }
}
```
