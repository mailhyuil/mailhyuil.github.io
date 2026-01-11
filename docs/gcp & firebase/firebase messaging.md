# firebase messaging

## install

```sh
flutter pub add firebase_messaging
flutter pub add flutter_local_notifications
```

## android setting

> android/app/src/main/AndroidManifest.xml

```xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
```

## ios setting

```md
# Xcode 열기

open ios/Runner.xcworkspace

# Capabilities 추가

Runner -> Capabilities -> +Capability
Push Notifications 추가
Background Modes 추가 -> Remote notifications 체크

# APNs Key 등록 (Apple Push Notification Service)

https://developer.apple.com 접속 및 로그인
Certificates, Identifiers & Profiles
왼쪽 메뉴 → Keys
우측 상단 ➕ (Create a Key)
Firebase console에 업로드
```

## code

```dart
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';

final FlutterLocalNotificationsPlugin localNoti =
    FlutterLocalNotificationsPlugin();

const AndroidNotificationChannel channel = AndroidNotificationChannel(
  'high_importance_channel',
  'High Importance Notifications',
  description: 'Used for important notifications.',
  importance: Importance.high,
);

// 백그라운드 핸들러 (최상위 함수여야 함)
@pragma('vm:entry-point')
Future<void> firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
  // 여기서 DB 업데이트/로그 정도만 (UI 작업 X)
}

Future<void> initNotifications() async {
  // iOS 권한 요청 + Android 13 권한 요청을 firebase_messaging로 트리거
  final messaging = FirebaseMessaging.instance;
  await messaging.requestPermission(alert: true, badge: true, sound: true);

  // 로컬 알림 초기화
  const initSettings = InitializationSettings(
    android: AndroidInitializationSettings('@mipmap/ic_launcher'),
    iOS: DarwinInitializationSettings(),
  );

  await localNoti.initialize(
    initSettings,
    onDidReceiveNotificationResponse: (resp) {
      // 로컬 알림 탭 처리 (payload 있으면 여기서 라우팅)
    },
  );

  // Android 채널 생성
  await localNoti
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.createNotificationChannel(channel);

  // 포그라운드에서 오는 FCM을 로컬 알림으로 보여주기
  FirebaseMessaging.onMessage.listen((RemoteMessage message) {
    final n = message.notification;
    final a = message.notification?.android;
    if (n == null) return;

    localNoti.show(
      n.hashCode,
      n.title,
      n.body,
      NotificationDetails(
        android: AndroidNotificationDetails(
          channel.id,
          channel.name,
          channelDescription: channel.description,
          icon: a?.smallIcon,
        ),
        iOS: const DarwinNotificationDetails(),
      ),
      payload: message.data.isNotEmpty ? message.data.toString() : null,
    );
  });

  // 알림 탭으로 앱 열렸을 때(백그라운드)
  FirebaseMessaging.onMessageOpenedApp.listen((message) {
    // message.data 기반으로 화면 이동
  });

  // 앱 종료 상태에서 알림 탭으로 시작
  final initial = await FirebaseMessaging.instance.getInitialMessage();
  if (initial != null) {
    // initial.data 기반으로 화면 이동
  }
}

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();

  FirebaseMessaging.onBackgroundMessage(firebaseMessagingBackgroundHandler);

  await initNotifications();

  runApp(const MyApp());
}

```
