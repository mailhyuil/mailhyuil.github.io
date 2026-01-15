# flutter base native EventChannel

- MethodChannel과 유사하지만, 이벤트를 전달하는 채널입니다.

## dart

배터리 상태 변화 감지 구현

```dart
import 'package:flutter/services.dart';

class BatteryStream {
  // 1. 고유한 채널 이름 정의
  static const EventChannel _eventChannel = EventChannel('com.example.app/batteryStream');

  void startListening() {
    // 2. receiveBroadcastStream을 통해 스트림 수신
    _eventChannel.receiveBroadcastStream().listen((event) {
      print("현재 상태: $event"); // 'charging' 또는 'discharging' 수신
    }, onError: (error) {
      print("에러 발생: $error");
    });
  }
}
```

## android

```kotlin
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.EventChannel

class MainActivity: FlutterActivity() {
    private val CHANNEL = "com.example.app/batteryStream"

    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)

        EventChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setStreamHandler(
            object : EventChannel.StreamHandler {
                // Flutter가 구독을 시작할 때 호출
                override fun onListen(arguments: Any?, events: EventChannel.EventSink?) {
                    // 예시로 2초마다 상태를 보냄 (실제로는 BroadcastReceiver 사용)
                    events?.success("charging")
                }

                // Flutter가 구독을 취소할 때 호출 (리소스 해제)
                override fun onCancel(arguments: Any?) {
                    // 센서 리스너 해제 등
                }
            }
        )
    }
}
```

## ios

```swift
import UIKit
import Flutter

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {

    override func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {

        let controller : FlutterViewController = window?.rootViewController as! FlutterViewController
        let eventChannel = FlutterEventChannel(name: "com.example.app/batteryStream",
                                              binaryMessenger: controller.binaryMessenger)

        eventChannel.setStreamHandler(BatteryStreamHandler())

        GeneratedPluginRegistrant.register(with: self)
        return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    }
}

// StreamHandler 구현 클래스
class BatteryStreamHandler: NSObject, FlutterStreamHandler {
    private var eventSink: FlutterEventSink?

    // Flutter가 구독을 시작할 때 (onListen)
    func onListen(withArguments arguments: Any?, eventSink events: @escaping FlutterEventSink) -> FlutterError? {
        self.eventSink = events

        // 예시: 기기 상태가 바뀔 때마다 데이터 전송
        NotificationCenter.default.addObserver(self, selector: #selector(statusChanged),
            name: UIDevice.batteryStateDidChangeNotification, object: nil)

        return nil
    }

    @objc private func statusChanged() {
        let state = UIDevice.current.batteryState
        eventSink?(state == .charging ? "charging" : "discharging")
    }

    // Flutter가 구독을 중단할 때 (onCancel)
    func onCancel(withArguments arguments: Any?) -> FlutterError? {
        NotificationCenter.default.removeObserver(self)
        eventSink = nil
        return nil
    }
}
```
