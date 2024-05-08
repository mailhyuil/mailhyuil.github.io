# flutter Webview

> 앱내에서 특정 기능은 웹화면으로 보여지게 하는 기능 (e.g. 카카오톡에서 링크를 클릭하면 웹으로 이동, 결제시 웹으로 이동)
>
> > 앱의 기술적 한계로 인해 웹으로 이동하는 기능이 필요할 때 사용

## install

```sh
flutter pub add webview_flutter
```

## android/app/build.gradle

> minSdkVersion 19 이상 필요

```gradle
android {
    defaultConfig {
        minSdkVersion 19
    }
}
```

## usage

```dart
controller = WebViewController()
  ..setJavaScriptMode(JavaScriptMode.unrestricted)
  ..setBackgroundColor(const Color(0x00000000))
  ..setNavigationDelegate(
    NavigationDelegate(
      onProgress: (int progress) {
        // Update loading bar.
      },
      onPageStarted: (String url) {},
      onPageFinished: (String url) {},
      onWebResourceError: (WebResourceError error) {},
      onNavigationRequest: (NavigationRequest request) {
        if (request.url.startsWith('https://www.youtube.com/')) {
          return NavigationDecision.prevent;
        }
        return NavigationDecision.navigate;
      },
    ),
  )
  ..loadRequest(Uri.parse('https://flutter.dev'));
```
