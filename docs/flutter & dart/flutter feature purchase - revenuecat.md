# flutter feature purchase - revenuecat

## install

```sh
# revenuecat
flutter pub add purchases_flutter 
flutter pub add purchases_ui_flutter
```

## revenuecat_config.dart

```dart
import 'package:flutter/foundation.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

/// RevenueCat 설정
class RevenueCatConfig {
  /// RevenueCat API Keys
  /// .env 파일에 다음 값들을 설정하세요:
  /// REVENUECAT_APPLE_API_KEY=your_apple_api_key
  /// REVENUECAT_GOOGLE_API_KEY=your_google_api_key
  static String get appleApiKey {
    return dotenv.env['REVENUECAT_APPLE_API_KEY'] ?? '';
  }

  static String get googleApiKey {
    return dotenv.env['REVENUECAT_GOOGLE_API_KEY'] ?? '';
  }

  /// RevenueCat 초기화
  static Future<void> initialize() async {
    try {
      // 플랫폼별 API Key 선택
      final apiKey = defaultTargetPlatform == TargetPlatform.iOS
          ? appleApiKey
          : googleApiKey;

      if (apiKey.isEmpty) {
        debugPrint('⚠️ RevenueCat API Key가 설정되지 않았습니다.');
        return;
      }

      // RevenueCat 설정
      final configuration = PurchasesConfiguration(apiKey);

      await Purchases.configure(configuration);

      debugPrint('✅ RevenueCat 초기화 완료');
    } catch (e) {
      debugPrint('❌ RevenueCat 초기화 실패: $e');
    }
  }

  /// 사용자 ID 설정 (로그인 시)
  static Future<void> setUserId(String userId) async {
    try {
      await Purchases.logIn(userId);
      debugPrint('✅ RevenueCat 사용자 로그인: $userId');
    } catch (e) {
      debugPrint('❌ RevenueCat 로그인 실패: $e');
    }
  }

  /// 사용자 로그아웃
  static Future<void> logout() async {
    try {
      await Purchases.logOut();
      debugPrint('✅ RevenueCat 로그아웃 완료');
    } catch (e) {
      debugPrint('❌ RevenueCat 로그아웃 실패: $e');
    }
  }
}
```

## auth.dart

```dart
// RevenueCat 초기화
try {
    await RevenueCatConfig.initialize();
    final user = SupabaseService.currentUser;
    if (user == null) {
        throw Exception('User is null');
    }
    await RevenueCatConfig.setUserId(user.id);
} catch (e) {
    debugPrint('RevenueCat 초기화 실패: $e');
    // RevenueCat 초기화 실패해도 계속 진행 (개발용)
}
```

## paywall

```dart
import 'package:flutter/material.dart';
import 'package:purchases_flutter/models/offering_wrapper.dart';
import 'package:purchases_ui_flutter/purchases_ui_flutter.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'purchase_service.g.dart';

class PurchaseService {
  Future<void> showPaywall(BuildContext context) async {
    final result = await RevenueCatUI.presentPaywall();
    switch (result) {
      case PaywallResult.purchased:
        // 결제 성공
        break;
      case PaywallResult.cancelled:
        // 유저가 닫음
        break;
      case PaywallResult.restored:
        // 복원
        break;
      default:
        break;
    }
  }

  Future<void> showPaywallWithOffering(
    BuildContext context,
    String offeringIdentifier,
  ) async {
    final result = await RevenueCatUI.presentPaywall(
      offering: Offering(offeringIdentifier, 'packages: []', {}, []),
    );
    switch (result) {
      case PaywallResult.purchased:
        // 결제 성공
        break;
      case PaywallResult.cancelled:
        // 유저가 닫음
        break;
      case PaywallResult.restored:
        // 복원
        break;
      default:
        break;
    }
  }
}

@riverpod
PurchaseService purchaseService(Ref ref) {
  return PurchaseService();
}
```
