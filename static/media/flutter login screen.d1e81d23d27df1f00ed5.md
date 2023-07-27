# flutter login screen

> CheckLoginState 위젯을 사용해서 로그인 상태에 따라 Home 또는 Login Screen을 리턴하기

```dart
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: CheckLoginState(),
    );
  }
}

class CheckLoginState extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder<User?>(
      stream: FirebaseAuth.instance.authStateChanges(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.active) {
          User? user = snapshot.data;
          if (user == null) {
            // 로그인되지 않은 상태이므로 로그인 페이지로 이동
            return LoginPage();
          } else {
            // 로그인된 상태이므로 홈 페이지로 이동
            return HomePage();
          }
        } else {
          // 연결 상태가 활성화되지 않은 경우, 로딩 화면 등을 표시할 수 있습니다.
          return Scaffold(
            body: Center(
              child: CircularProgressIndicator(),
            ),
          );
        }
      },
    );
  }
}

class LoginPage extends StatelessWidget {
  // 로그인 페이지 구현
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login Page'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // 로그인 버튼을 누르면 로그인 처리를 수행하고 홈 페이지로 이동
            // 로그인 처리는 Firebase Authentication을 사용하여 구현합니다.
            // 예를 들면, FirebaseAuth.instance.signInWithEmailAndPassword(email: email, password: password);
          },
          child: Text('Login'),
        ),
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  // 로그인이 완료된 홈 페이지 구현
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Center(
        child: Text('Welcome!'),
      ),
    );
  }
}
```
