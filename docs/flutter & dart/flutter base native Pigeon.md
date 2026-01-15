# flutter base native Pigeon

- MethodChannel은 메서드 이름을 문자열로 주고받기 때문에 오타가 나도 컴파일 시점에 알 수 없습니다.
- Pigeon은 인터페이스를 정의하여 네이티브 코드에서 이를 구현하여 Type-Safe 통신을 지원합니다.
- Dart에서 인터페이스를 정의하면 Android(Kotlin/Java)와 iOS(Swift/Obj-C) 코드를 자동 생성합니다.

## 인터페이스 작성

```dart
// pigeons/messages.dart
@HostApi()
abstract class BatteryApi {
  int getBatteryLevel(); // "이런 함수가 있을 거야"라고 선언만 함
}
```

## android

```kotlin
// Pigeon이 만들어준 틀을 상속받음
class MyBatteryImpl : BatteryApi {
    override fun getBatteryLevel(): Long {
        return 85 // 실제 로직만 딱 작성! (문자열 체크 필요 없음)
    }
}
```

## ios

```swift
import UIKit
import Flutter

// 1. Pigeon이 생성해준 Protocol을 상속받는 클래스 구현
class MyBatteryApiImplementation: NSObject, BatteryApi {
    func getBatteryStatus() -> BatteryInfo {
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true

        // 2. Pigeon이 생성해준 클래스(BatteryInfo)에 데이터를 담아 반환
        let info = BatteryInfo(
            level: Int64(device.batteryLevel * 100),
            isCharging: device.batteryState == .charging
        )
        return info
    }
}

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {

    let controller : FlutterViewController = window?.rootViewController as! FlutterViewController

    // 3. Pigeon이 생성해준 Setup 함수를 통해 통로 연결
    let api = MyBatteryApiImplementation()
    BatteryApiSetup.setUp(binaryMessenger: controller.binaryMessenger, api: api)

    GeneratedPluginRegistrant.register(with: self)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}
```
