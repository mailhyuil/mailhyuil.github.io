# ad google AdMob flutter admob_flutter

## prepare

1. adMob 앱 생성
2. 광고 단위 생성
3. test 기기 추가

## install

```sh
flutter pub add google_mobile_ads
```

## android/app/src/main/AndroidManifest.xml

```xml
<manifest>
  <application>
    <meta-data
      android:name="com.google.android.gms.ads.APPLICATION_ID"
      android:value="ca-app-pub-5245116717044907~6558038943"/>
  </application>
</manifest>
```

## ios/Runner/Info.plist

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-5245116717044907~3931875608</string>
<key>io.flutter.embedded_views_preview</key>
<true/>
<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
```

## main.dart

```dart
import 'package:google_mobile_ads/google_mobile_ads.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  await MobileAds.instance.initialize();
}
```

## ad_unit_id.dart

```dart
import 'dart:io';

class AdUnitId {
  static String? banner() {
    if (Platform.isIOS) return 'ca-app-pub-3940256099942544/2934735716';
    if (Platform.isAndroid) return 'ca-app-pub-3940256099942544/6300978111';
    return null;
  }

  static String? interstitial() {
    if (Platform.isIOS) return 'ca-app-pub-3940256099942544/4411468910';
    if (Platform.isAndroid) return 'ca-app-pub-3940256099942544/1033173712';
    return null;
  }

  static String? reward() {
    if (Platform.isIOS) return 'ca-app-pub-3940256099942544/1712485313';
    if (Platform.isAndroid) return 'ca-app-pub-3940256099942544/5224354917';
    return null;
  }
}
```

## ad_banner.dart

```dart
import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:hit_me_up/feature/ads/util/ad_unit_id.dart';

class AdBanner extends StatefulWidget {
  const AdBanner({
    super.key,
    this.size = AdSize.banner,
    this.margin = const EdgeInsets.only(bottom: 20),
  });

  final AdSize size;
  final EdgeInsets margin;

  @override
  State<AdBanner> createState() => _AdBannerState();
}

class _AdBannerState extends State<AdBanner> {
  BannerAd? _banner;
  bool _loaded = false;

  @override
  void initState() {
    super.initState();

    final unitId = AdUnitId.banner();
    if (unitId == null) return;

    final banner = BannerAd(
      adUnitId: unitId,
      size: widget.size,
      request: const AdRequest(),
      listener: BannerAdListener(
        onAdLoaded: (_) {
          if (!mounted) return;
          setState(() => _loaded = true);
        },
        onAdFailedToLoad: (ad, err) {
          ad.dispose();
          // 필요하면 로그/재시도 넣기
        },
      ),
    );

    _banner = banner;
    banner.load();
  }

  @override
  void dispose() {
    _banner?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final banner = _banner;
    if (banner == null || !_loaded) return const SizedBox.shrink();

    return Container(
      margin: widget.margin,
      width: banner.size.width.toDouble(),
      height: banner.size.height.toDouble(),
      alignment: Alignment.center,
      child: AdWidget(ad: banner),
    );
  }
}
```

## ad_controller.dart

- Interstitial Ad / Reward Ad

```dart
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:hit_me_up/feature/ads/util/ad_unit_id.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'ad_controller.g.dart';

class AdState {
  final bool interstitialReady;
  final bool rewardedReady;

  const AdState({required this.interstitialReady, required this.rewardedReady});

  AdState copyWith({bool? interstitialReady, bool? rewardedReady}) {
    return AdState(
      interstitialReady: interstitialReady ?? this.interstitialReady,
      rewardedReady: rewardedReady ?? this.rewardedReady,
    );
  }

  static const initial = AdState(
    interstitialReady: false,
    rewardedReady: false,
  );
}

@Riverpod(keepAlive: true)
class AdController extends _$AdController {
  InterstitialAd? _interstitial;
  RewardedAd? _rewarded;

  @override
  AdState build() {
    // 앱 전역에서 쓰는 광고는 keepAlive + onDispose로 정리
    ref.onDispose(_disposeInternal);

    // 최초 로드
    _loadInterstitial();
    _loadReward();

    return AdState.initial;
  }

  Future<void> _loadInterstitial() async {
    final unitId = AdUnitId.interstitial();
    if (unitId == null) return;

    // 이미 있으면 중복 로드 방지
    if (_interstitial != null) return;

    await InterstitialAd.load(
      adUnitId: unitId,
      request: const AdRequest(),
      adLoadCallback: InterstitialAdLoadCallback(
        onAdLoaded: (ad) {
          _interstitial = ad;

          ad.fullScreenContentCallback = FullScreenContentCallback(
            onAdDismissedFullScreenContent: (ad) {
              ad.dispose();
              _interstitial = null;
              state = state.copyWith(interstitialReady: false);
              _loadInterstitial(); // 닫히면 자동 재로딩
            },
            onAdFailedToShowFullScreenContent: (ad, err) {
              ad.dispose();
              _interstitial = null;
              state = state.copyWith(interstitialReady: false);
              _loadInterstitial();
            },
          );

          state = state.copyWith(interstitialReady: true);
        },
        onAdFailedToLoad: (err) {
          _interstitial = null;
          state = state.copyWith(interstitialReady: false);
          // 필요하면 여기서 재시도(backoff) 로직 넣으면 됨
        },
      ),
    );
  }

  Future<void> _loadReward() async {
    final unitId = AdUnitId.reward();
    if (unitId == null) return;

    if (_rewarded != null) return;

    await RewardedAd.load(
      adUnitId: unitId,
      request: const AdRequest(),
      rewardedAdLoadCallback: RewardedAdLoadCallback(
        onAdLoaded: (ad) {
          _rewarded = ad;

          ad.fullScreenContentCallback = FullScreenContentCallback(
            onAdDismissedFullScreenContent: (ad) {
              ad.dispose();
              _rewarded = null;
              state = state.copyWith(rewardedReady: false);
              _loadReward();
            },
            onAdFailedToShowFullScreenContent: (ad, err) {
              ad.dispose();
              _rewarded = null;
              state = state.copyWith(rewardedReady: false);
              _loadReward();
            },
          );

          state = state.copyWith(rewardedReady: true);
        },
        onAdFailedToLoad: (err) {
          _rewarded = null;
          state = state.copyWith(rewardedReady: false);
        },
      ),
    );
  }

  /// 전면 광고 표시 (성공 여부 반환)
  Future<bool> showInterstitial() async {
    final ad = _interstitial;
    if (ad == null) {
      _loadInterstitial();
      return false;
    }

    // show()는 동기지만, 호출 성공 여부를 bool로 리턴
    ad.show();
    // show 직후에는 콜백에서 dispose + reload가 처리됨
    state = state.copyWith(interstitialReady: false);
    _interstitial = null;
    return true;
  }

  /// 리워드 광고 표시 (보상 콜백을 외부에서 받을 수 있게 rewardEarned 전달)
  Future<bool> showRewarded({
    required void Function(RewardItem reward) onUserEarnedReward,
  }) async {
    final ad = _rewarded;
    if (ad == null) {
      _loadReward();
      return false;
    }

    ad.show(
      onUserEarnedReward: (_, reward) {
        onUserEarnedReward(reward);
      },
    );

    state = state.copyWith(rewardedReady: false);
    _rewarded = null;
    return true;
  }

  void _disposeInternal() {
    _interstitial?.dispose();
    _rewarded?.dispose();
    _interstitial = null;
    _rewarded = null;
  }
}
```

