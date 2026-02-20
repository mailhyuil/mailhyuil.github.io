# firebase messaging - push notification

## install

```sh
flutter pub add firebase_messaging
# flutter pub add flutter_local_notifications # 포그라운드에서도 “알림 배너” 띄우려면 (toast 사용으로 대체)
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
import 'dart:convert';

import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';

/// FCM + Local Notifications 통합 서비스
class PushNotifications {
  PushNotifications._();

  static final FirebaseMessaging _fcm = FirebaseMessaging.instance;
  static final FlutterLocalNotificationsPlugin _local =
      FlutterLocalNotificationsPlugin();

  static const AndroidNotificationChannel _channel = AndroidNotificationChannel(
    'default_channel',
    'Default Notifications',
    description: 'Default channel for foreground notifications',
    importance: Importance.high,
  );

  /// 알림 탭(FCM 탭 + 로컬 알림 탭) 공통 처리 콜백
  /// - data: FCM message.data
  static void Function(Map<String, dynamic> data)? _onNotificationTap;
  static bool _isInitialized = false;

  /// 앱 시작 시 1회 호출
  static Future<void> init({
    void Function(Map<String, dynamic> data)? onNotificationTap,
  }) async {
    if (_isInitialized) return;
    _onNotificationTap = onNotificationTap;

    // 1) 권한 요청
    await _fcm.requestPermission();

    // 2) 백그라운드 핸들러 등록 (top-level 함수 필수)
    FirebaseMessaging.onBackgroundMessage(backgroundMessageHandler);

    // 3) 로컬 알림 초기화 + 채널 생성
    await _initLocalNotifications();

    // 4) iOS 포그라운드 알림 표시 옵션
    await _fcm.setForegroundNotificationPresentationOptions(
      alert: true,
      badge: true,
      sound: true,
    );

    // 5) 리스너 설정
    _setupFcmListeners();
    _isInitialized = true;
  }

  /// 토큰 가져오기
  static Future<String?> getToken() => _fcm.getToken();

  /// FCM foreground/background/opened listeners
  static void _setupFcmListeners() {
    // ✅ Foreground 수신 → 로컬 알림으로 표시
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      final title = message.notification?.title ?? 'Notification';
      final body = message.notification?.body ?? '';

      // payload는 data를 통째로 넣어두는 게 제일 안전함
      _showLocal(title: title, body: body, payload: message.data);
    });

    // ✅ 백그라운드에서 알림 탭해서 앱 열린 경우
    FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
      _handleTap(message.data);
    });

    // ✅ 종료(terminated) 상태에서 알림 탭으로 시작된 경우
    _fcm.getInitialMessage().then((initial) {
      if (initial != null) _handleTap(initial.data);
    });
  }

  static void _handleTap(Map<String, dynamic> data) {
    if (_onNotificationTap == null) return;
    _onNotificationTap!(data);
  }

  /// Local notifications init
  static Future<void> _initLocalNotifications() async {
    const settings = InitializationSettings(
      android: AndroidInitializationSettings('@mipmap/ic_launcher'),
      iOS: DarwinInitializationSettings(),
    );

    await _local.initialize(
      settings,
      onDidReceiveNotificationResponse: (resp) {
        // 로컬 알림 탭 처리 (payload 있으면 여기로 들어옴)
        final payload = resp.payload;
        if (payload == null || payload.isEmpty) return;

        // payload는 json string으로 저장했기 때문에 map으로 파싱해서 넘김
        // (아래 _encode/_decode 사용)
        final data = _decodePayload(payload);
        _handleTap(data);
      },
    );

    // Android 8+ 채널 생성
    final android = _local
        .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin
        >();
    await android?.createNotificationChannel(_channel);
  }

  /// 로컬 알림 표시
  static Future<void> _showLocal({
    required String title,
    required String body,
    required Map<String, dynamic> payload,
  }) async {
    await _local.show(
      DateTime.now().millisecondsSinceEpoch ~/ 1000,
      title,
      body,
      NotificationDetails(
        android: AndroidNotificationDetails(
          _channel.id,
          _channel.name,
          channelDescription: _channel.description,
          importance: Importance.high,
          priority: Priority.high,
        ),
        iOS: const DarwinNotificationDetails(),
      ),
      payload: _encodePayload(payload),
    );
  }

  /// payload Map을 String으로 직렬화 (local notifications payload는 String만 가능)
  static String _encodePayload(Map<String, dynamic> data) {
    // JSON으로 저장하는 게 제일 안전
    // dart:convert의 jsonEncode/jsonDecode를 쓰기 위해 import 추가 필요
    // (아래 import 안내 참고)
    return jsonEncode(data);
  }

  static Map<String, dynamic> _decodePayload(String payload) {
    try {
      final decoded = jsonDecode(payload);
      if (decoded is Map<String, dynamic>) return decoded;
      if (decoded is Map) return decoded.cast<String, dynamic>();
      return <String, dynamic>{};
    } catch (_) {
      return <String, dynamic>{};
    }
  }
}

/// ✅ background handler는 반드시 top-level 함수여야 함
/// 여기서는 UI 작업 말고 간단 처리만 권장
Future<void> backgroundMessageHandler(RemoteMessage message) async {
  // TODO: background data 처리
  // 예: badge count 저장, 간단한 로깅 등
}
```

## main.dart

```dart

class MyApp extends ConsumerStatefulWidget {
  const MyApp({super.key});

  @override
  ConsumerState<MyApp> createState() => _MyAppState();
}

class _MyAppState extends ConsumerState<MyApp> {
  @override
  void initState() {
    super.initState();
    // Firebase Messaging 초기화
    WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
      await PushNotifications.init(
        onNotificationTap: (data) {
          final router = ref.read(routerProvider);
          final route = data['route'] as String?;
          if (route == "chat") {
            final chatId = data['chatId'] as String?;
            if (chatId != null) {
              final path = '/chat/$chatId';
              router.go(path);
            }
          }
        },
      );
    });
  }
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: HomeScreen(),
    );
  }
}
```
