# flutter ads AppLovin

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
import 'dart:async';

import 'package:deepn/feature/ads/util/ad_unit_id.dart';
import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

class AdBanner extends StatefulWidget {
  /// adaptive=false일 때만 사용됨
  final AdSize size;

  /// true면 Anchored Adaptive로 로드
  final bool adaptive;

  /// 로딩/실패 시에도 공간을 유지할지(레이아웃 튐 방지)
  final bool keepSpace;

  /// LayoutBuilder로 받은 폭(권장). null이면 MediaQuery width 사용
  final int? maxWidth;

  const AdBanner({
    super.key,
    this.size = AdSize.banner,
    this.adaptive = false,
    this.keepSpace = true,
    this.maxWidth,
  });

  @override
  State<AdBanner> createState() => _AdBannerState();
}

class _AdBannerState extends State<AdBanner> with WidgetsBindingObserver {
  BannerAd? _banner;
  AdSize? _resolvedSize;
  bool _loaded = false;

  String? _unitId;

  bool _didInitLoad = false;

  int _loadGen = 0; // 이전 콜백 무시용 토큰
  int? _lastWidth;
  double _lastHeightForSpace = 50.0;

  Timer? _metricsDebounce;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);

    _unitId = AdUnitId.banner(); // null이면 숨김
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    if (_didInitLoad) return;
    _didInitLoad = true;

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      _prepareAndLoad(forceReload: true);
    });
  }

  @override
  void didChangeMetrics() {
    // ⚠️ didChangeMetrics는 키보드/인셋 등으로도 자주 불림
    // 그래서 여기서 forceReload:true 하면 "1초마다 리로드" 같은 지옥 가능
    _metricsDebounce?.cancel();
    _metricsDebounce = Timer(const Duration(milliseconds: 300), () {
      if (!mounted) return;
      _prepareAndLoad(forceReload: false); // ✅ true 금지
    });
  }

  int _calcWidth(BuildContext context) {
    final w = (widget.maxWidth ?? MediaQuery.sizeOf(context).width).truncate();
    return w <= 0 ? 0 : w;
  }

  Future<void> _prepareAndLoad({bool forceReload = false}) async {
    final unitId = _unitId;
    if (unitId == null) return;

    final width = _calcWidth(context);
    if (width <= 0) return;

    // ✅ width가 안 변했고 강제도 아니면(특히 adaptive) 굳이 건드리지 않기
    if (!forceReload && _lastWidth == width) {
      return;
    }
    _lastWidth = width;

    AdSize targetSize;
    if (widget.adaptive) {
      final adaptiveSize =
          await AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(width);
      if (!mounted || adaptiveSize == null) return;
      targetSize = adaptiveSize;
    } else {
      targetSize = widget.size;
    }

    // ✅ 목표 사이즈가 동일 + 이미 로드 완료면 스킵
    if (!forceReload &&
        _resolvedSize != null &&
        _resolvedSize!.width == targetSize.width &&
        _resolvedSize!.height == targetSize.height &&
        _banner != null &&
        _loaded) {
      return;
    }

    final myGen = ++_loadGen;

    // 기존 배너 정리
    final old = _banner;
    _banner = null;
    _loaded = false;
    _resolvedSize = targetSize;
    _lastHeightForSpace = targetSize.height.toDouble();
    await old?.dispose();

    if (mounted) setState(() {});

    final banner = BannerAd(
      adUnitId: unitId,
      size: targetSize,
      request: const AdRequest(),
      listener: BannerAdListener(
        onAdLoaded: (ad) {
          // ✅ 현재 로드 세대 아니면 무시
          if (!mounted || myGen != _loadGen) {
            ad.dispose();
            return;
          }
          setState(() {
            _loaded = true;
          });
        },
        onAdFailedToLoad: (ad, err) {
          ad.dispose();
          if (!mounted || myGen != _loadGen) return;
          setState(() {
            _banner = null;
            _loaded = false;
          });
        },
      ),
    );

    // ✅ 생성한 인스턴스를 상태로 들고 가자(캐스팅/참조 꼬임 방지)
    _banner = banner;
    await banner.load();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _metricsDebounce?.cancel();

    _loadGen++; // 남은 콜백 무시
    _banner?.dispose();
    _banner = null;

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final size = _resolvedSize ?? (widget.adaptive ? null : widget.size);

    // 로딩/실패 시 공간 유지
    if (_banner == null || !_loaded || size == null) {
      if (!widget.keepSpace) return const SizedBox.shrink();
      final h = size?.height.toDouble() ?? _lastHeightForSpace;
      return SizedBox(height: h);
    }

    return SizedBox(
      width: size.width.toDouble(),
      height: size.height.toDouble(),
      child: AdWidget(ad: _banner!),
    );
  }
}
```
