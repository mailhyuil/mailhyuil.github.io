# flutter 프로젝트 구조

## screens, models, services, widgets

## 각 screen에 Scaffold 하나 씩 (Scaffold를 래핑해서 appBar, body, bottomNavigationBar 등을 설정 해도 된다.)

```dart
import 'package:flutter/material.dart';

class CustomScaffold extends StatelessWidget {
  final String appBarTitle;
  final Widget body;
  const CustomScaffold(
      {Key? key, required this.appBarTitle, required this.body})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(appBarTitle),
      ),
      body: body,
    );
  }
}
```
