# flutter Webview

- 앱내에서 특정 기능은 웹화면으로 보여지게 하는 기능 (e.g. 카카오톡에서 링크를 클릭하면 웹으로 이동, 결제시 웹으로 이동)
- 기본적인 “웹 페이지 띄우기 / JS 실행” → flutter_webview로 가능
- 엔진 내부 설정, 보안, 쿠키, 미디어, 디버깅 → OS별로 다름

## install

```sh
flutter pub add webview_flutter

flutter pub add webview_flutter_android
flutter pub add webview_flutter_wkwebview
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
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WebViewPage extends StatefulWidget {
  const WebViewPage({super.key, required this.url});
  final String url;

  @override
  State<WebViewPage> createState() => _WebViewPageState();
}

class _WebViewPageState extends State<WebViewPage> {
  late final WebViewController controller;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();

    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted) // JS 허용
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageStarted: (_) => setState(() => isLoading = true),
          onPageFinished: (_) => setState(() => isLoading = false),
          onWebResourceError: (err) {
            debugPrint('Web error: ${err.description}');
          },
          // 특정 도메인만 허용 같은 제어도 가능
          // onNavigationRequest: (request) {
          //   if (!request.url.startsWith('https://example.com')) {
          //     return NavigationDecision.prevent;
          //   }
          //   return NavigationDecision.navigate;
          // },
        ),
      )
      ..loadRequest(Uri.parse(widget.url));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('WebView'),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: () => controller.reload(),
          ),
        ],
      ),
      body: Stack(
        children: [
          WebViewWidget(controller: controller),
          if (isLoading)
            const Center(child: CircularProgressIndicator()),
        ],
      ),
    );
  }
}
```

## route

```dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (_) => const WebViewPage(url: 'https://example.com'),
  ),
);
```

## JS -> Flutter 통신

```dart
//js
App.postMessage(JSON.stringify({ type: "open_notice", id: 123 }));

//flutter
controller.addJavaScriptChannel(
  'App',
  onMessageReceived: (JavaScriptMessage msg) {
    debugPrint('JS says: ${msg.message}');
    // 예: {"type":"open_notice","id":123}
  },
);
```

## Flutter -> JS 통신

```dart
// flutter에서 js 실행
await controller.runJavaScript("""
  window.showPopup?.("공지", "서버 점검 안내");
""");

// flutter에서 html 로드
final html = """
<!doctype html>
<html>
<body>
  <h1>공지</h1>
  <button onclick="App.postMessage('clicked')">앱에 알리기</button>
</body>
</html>
""";

await controller.loadHtmlString(html);
```
