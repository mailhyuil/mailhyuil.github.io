# flutter Webview Platform-Specific Features

> 각 운영체제의 특정 기능을 사용하려면 아래 설치

```sh
# flutter feature Webview Platform-Specific Features
flutter pub add webview_flutter_android
# ios
flutter pub add webview_flutter_wkwebview
```

## 사용

```dart
late final PlatformWebViewControllerCreationParams params;
if (WebViewPlatform.instance is WebKitWebViewPlatform) {
  params = WebKitWebViewControllerCreationParams(
    allowsInlineMediaPlayback: true,
    mediaTypesRequiringUserAction: const <PlaybackMediaTypes>{},
  );
} else {
  params = const PlatformWebViewControllerCreationParams();
}

final WebViewController controller =
    WebViewController.fromPlatformCreationParams(params);
// ···
if (controller.platform is AndroidWebViewController) {
  AndroidWebViewController.enableDebugging(true);
  (controller.platform as AndroidWebViewController)
      .setMediaPlaybackRequiresUserGesture(false);
}
```
