# flutter UI dark mode

## main

```dart
MaterialApp(
  title: 'Flutter Dark Mode',
  // 시스템 설정에 따라 테마 모드를 자동으로 전환 (system, light, dark)
  themeMode: ThemeMode.system, 
  
  // 1. 라이트 모드 테마
  theme: ThemeData(
    brightness: Brightness.light,
    primarySwatch: Colors.blue,
    dialogTheme: DialogTheme(
      backgroundColor: Colors.white,
      titleTextStyle: TextStyle(color: Colors.black),
    ),
  ),

  // 2. 다크 모드 테마
  darkTheme: ThemeData(
    brightness: Brightness.dark,
    primarySwatch: Colors.deepPurple,
    // 다이얼로그 전용 다크 테마
    dialogTheme: DialogTheme(
      backgroundColor: Colors.grey[900],
      titleTextStyle: TextStyle(color: Colors.white, fontSize: 20),
      contentTextStyle: TextStyle(color: Colors.white70),
    ),
    // 전체적인 배경색이나 카드 색상도 조절 가능
    scaffoldBackgroundColor: Colors.black,
  ),
  home: MyHomePage(),
);
```

## UI 디자인

Theme.of(context)를 사용하여 현재 테마에 따라 자동으로 밝은색/어두운색 적용

```dart
Container(
  color: Theme.of(context).cardColor, // 테마에 따라 자동으로 밝은색/어두운색 적용
  child: Text(
    '안녕하세요!',
    style: Theme.of(context).textTheme.bodyLarge, // 텍스트 색상도 자동 전환
  ),
)
```
