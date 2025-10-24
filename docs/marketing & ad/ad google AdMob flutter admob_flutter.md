# ad google AdMob flutter admob_flutter

> CPM : Cost Per Mille // 1000번 노출당 수익
>
> > CPC : Cost Per Click // 1번 클릭당 수익

## prepare

1. adMob 앱 생성
2. 광고 단위 생성
3. test 기기 추가

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
import 'dart:io';

import 'package:admob_flutter/admob_flutter.dart';
// import 'package:admob_flutter_example/extensions.dart';
import 'package:flutter/material.dart';
import 'package:flutter_my_animation/features/home/views/home_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Admob.initialize();
  runApp(const MyMaterialApp());
}

class MyMaterialApp extends StatefulWidget {
  const MyMaterialApp({super.key});

  @override
  _MyMaterialAppState createState() => _MyMaterialAppState();
}

class _MyMaterialAppState extends State<MyMaterialApp> {
  GlobalKey<ScaffoldState> scaffoldState = GlobalKey();
  AdmobBannerSize? bannerSize;
  late AdmobInterstitial interstitialAd;
  late AdmobReward rewardAd;

  @override
  void initState() {
    super.initState();

    bannerSize = AdmobBannerSize.BANNER;

    interstitialAd = AdmobInterstitial(
      adUnitId: getInterstitialAdUnitId()!,
      listener: (AdmobAdEvent event, Map<String, dynamic>? args) {
        if (event == AdmobAdEvent.closed) interstitialAd.load();
        handleEvent(event, args, 'Interstitial');
      },
    );

    rewardAd = AdmobReward(
      adUnitId: getRewardBasedVideoAdUnitId()!,
      listener: (AdmobAdEvent event, Map<String, dynamic>? args) {
        if (event == AdmobAdEvent.closed) rewardAd.load();
        handleEvent(event, args, 'Reward');
      },
    );

    interstitialAd.load();
    rewardAd.load();
  }

  void handleEvent(
      AdmobAdEvent event, Map<String, dynamic>? args, String adType) {
    switch (event) {
      case AdmobAdEvent.loaded:
        showSnackBar('New Admob $adType Ad loaded!');
        break;
      case AdmobAdEvent.opened:
        showSnackBar('Admob $adType Ad opened!');
        break;
      case AdmobAdEvent.closed:
        showSnackBar('Admob $adType Ad closed!');
        break;
      case AdmobAdEvent.failedToLoad:
        showSnackBar('Admob $adType failed to load. :(');
        break;
      case AdmobAdEvent.rewarded:
        showDialog(
          context: scaffoldState.currentContext!,
          builder: (BuildContext context) {
            return WillPopScope(
              onWillPop: () async {
                ScaffoldMessenger.of(context).hideCurrentSnackBar();
                return true;
              },
              child: AlertDialog(
                content: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    const Text('Reward callback fired. Thanks Andrew!'),
                    Text('Type: ${args!['type']}'),
                    Text('Amount: ${args['amount']}'),
                  ],
                ),
              ),
            );
          },
        );
        break;
      default:
    }
  }

  void showSnackBar(String content) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(content),
        duration: const Duration(milliseconds: 1500),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blueGrey,
      ),
      home: Builder(
        builder: (BuildContext context) => Scaffold(
          key: scaffoldState,
          appBar: AppBar(
            title: const Text('AdmobFlutter'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      fullscreenDialog: true,
                      builder: (BuildContext context) {
                        return const HomeScreen();
                      },
                    ),
                  );
                },
                child: const Text(
                  'FullscreenDialog',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              )
            ],
          ), // .withBottomAdmobBanner(context),
          bottomNavigationBar: Builder(
            builder: (BuildContext context) {
              return Container(
                color: Colors.blueGrey,
                child: SafeArea(
                  child: SizedBox(
                    height: 60,
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Expanded(
                          child: TextButton(
                            onPressed: () async {
                              final isLoaded = await interstitialAd.isLoaded;
                              if (isLoaded ?? false) {
                                interstitialAd.show();
                              } else {
                                showSnackBar(
                                    'Interstitial ad is still loading...');
                              }
                            },
                            child: const Text(
                              'Show Interstitial',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                        ),
                        Expanded(
                          child: TextButton(
                            onPressed: () async {
                              if (await rewardAd.isLoaded) {
                                rewardAd.show();
                              } else {
                                showSnackBar('Reward ad is still loading...');
                              }
                            },
                            child: const Text(
                              'Show Reward',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                        ),
                        Expanded(
                          child: PopupMenuButton(
                            initialValue: bannerSize,
                            offset: const Offset(0, 20),
                            onSelected: (AdmobBannerSize newSize) {
                              setState(() {
                                bannerSize = newSize;
                              });
                            },
                            itemBuilder: (BuildContext context) =>
                                <PopupMenuEntry<AdmobBannerSize>>[
                              const PopupMenuItem(
                                value: AdmobBannerSize.BANNER,
                                child: Text('BANNER'),
                              ),
                              const PopupMenuItem(
                                value: AdmobBannerSize.LARGE_BANNER,
                                child: Text('LARGE_BANNER'),
                              ),
                              const PopupMenuItem(
                                value: AdmobBannerSize.MEDIUM_RECTANGLE,
                                child: Text('MEDIUM_RECTANGLE'),
                              ),
                              const PopupMenuItem(
                                value: AdmobBannerSize.FULL_BANNER,
                                child: Text('FULL_BANNER'),
                              ),
                              const PopupMenuItem(
                                value: AdmobBannerSize.LEADERBOARD,
                                child: Text('LEADERBOARD'),
                              ),
                              PopupMenuItem(
                                value: AdmobBannerSize.SMART_BANNER(context),
                                child: const Text('SMART_BANNER'),
                              ),
                              PopupMenuItem(
                                value: AdmobBannerSize.ADAPTIVE_BANNER(
                                  width: MediaQuery.of(context)
                                          .size
                                          .width
                                          .toInt() -
                                      40, // considering EdgeInsets.all(20.0)
                                ),
                                child: const Text('ADAPTIVE_BANNER'),
                              ),
                            ],
                            child: const Center(
                              child: Text(
                                'Banner size',
                                style: TextStyle(
                                    fontWeight: FontWeight.w500,
                                    color: Colors.white),
                              ),
                            ),
                          ),
                        ),
                        Expanded(
                          child: TextButton(
                            onPressed: () {
                              Navigator.of(context).push(
                                MaterialPageRoute(
                                    builder: (BuildContext context) {
                                  return const HomeScreen();
                                }),
                              );
                            },
                            child: const Text(
                              'Push Page',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
          body: Column(
            children: [
              Expanded(
                child: Scrollbar(
                  child: ListView.builder(
                    padding: const EdgeInsets.all(20.0),
                    itemCount: 1000,
                    itemBuilder: (BuildContext context, int index) {
                      if (index != 0 && index % 6 == 0) {
                        return Column(
                          children: <Widget>[
                            Container(
                              margin: const EdgeInsets.only(bottom: 20.0),
                              child: AdmobBanner(
                                adUnitId: getBannerAdUnitId()!,
                                adSize: bannerSize!,
                                listener: (AdmobAdEvent event,
                                    Map<String, dynamic>? args) {
                                  handleEvent(event, args, 'Banner');
                                },
                                onBannerCreated:
                                    (AdmobBannerController controller) {
                                  print('created!');
                                },
                              ),
                            ),
                          ],
                        );
                      }
                      return Container(
                        height: 100.0,
                        margin: const EdgeInsets.only(bottom: 20.0),
                        color: Colors.red,
                      );
                    },
                  ),
                ),
              ),
              // Another option is to fix a banner ad to the top or bottom of your content.
              // Notice that banners are not scrolling, which is a violation of admob policy.
              //
              // See: https://github.com/kmcgill88/admob_flutter/issues/194
              // "banner ads should not move as a user scrolls, as users may try to
              // click on the menu but end up clicking on the ad accidentally instead.
              // This specific implementation is against policy and we reserve the right
              // to disable ad serving to your app."

              // Builder(
              //   builder: (BuildContext context) {
              //     final size = MediaQuery.of(context).size;
              //     final height = max(size.height * .05, 50.0);
              //     return Container(
              //       width: size.width,
              //       height: height,
              //       child: AdmobBanner(
              //         adUnitId: getBannerAdUnitId(),
              //         adSize: AdmobBannerSize.ADAPTIVE_BANNER(
              //           width: size.width.toInt(),
              //         ),
              //         listener: (AdmobAdEvent event, Map<String, dynamic> args) {
              //           handleEvent(event, args, 'Banner');
              //         },
              //       ),
              //     );
              //   },
              // ),
            ],
          ),
        ),
      ),
    );
    // .withBottomAdmobBanner(context);
  }

  @override
  void dispose() {
    interstitialAd.dispose();
    rewardAd.dispose();
    super.dispose();
  }
}

/*
Test Id's from:
https://developers.google.com/admob/ios/banner
https://developers.google.com/admob/android/banner

App Id - See README where these Id's go
Android: ca-app-pub-3940256099942544~3347511713
iOS: ca-app-pub-3940256099942544~1458002511

Banner
Android: ca-app-pub-3940256099942544/6300978111
iOS: ca-app-pub-3940256099942544/2934735716

Interstitial
Android: ca-app-pub-3940256099942544/1033173712
iOS: ca-app-pub-3940256099942544/4411468910

Reward Video
Android: ca-app-pub-3940256099942544/5224354917
iOS: ca-app-pub-3940256099942544/1712485313
*/

String? getBannerAdUnitId() {
  if (Platform.isIOS) {
    return 'ca-app-pub-3940256099942544/2934735716';
  } else if (Platform.isAndroid) {
    return 'ca-app-pub-3940256099942544/6300978111';
  }
  return null;
}

String? getInterstitialAdUnitId() {
  if (Platform.isIOS) {
    return 'ca-app-pub-3940256099942544/4411468910';
  } else if (Platform.isAndroid) {
    return 'ca-app-pub-3940256099942544/1033173712';
  }
  return null;
}

String? getRewardBasedVideoAdUnitId() {
  if (Platform.isIOS) {
    return 'ca-app-pub-3940256099942544/1712485313';
  } else if (Platform.isAndroid) {
    return 'ca-app-pub-3940256099942544/5224354917';
  }
  return null;
}
```
