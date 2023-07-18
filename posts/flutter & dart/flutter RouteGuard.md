# flutter RouteGuard

## onGenerateRoute 사용

```dart
MaterialApp(
  onGenerateRoute: (settings) {
    if (settings.name == '/protected') {
      // 경로에 따른 조건 확인
      if (isLoggedIn) {
        return MaterialPageRoute(builder: (context) => ProtectedPage());
      } else {
        return MaterialPageRoute(builder: (context) => LoginPage());
      }
    }
    // 기타 경로에 대한 처리
    return null;
  },
)
```

## AutoRoute 사용

```dart
class AuthGuard extends AutoRouteGuard {
 @override
 void onNavigation(NavigationResolver resolver, StackRouter router) {
     if(authenitcated){
       // 접근 권한이 있다면 화면 이동
        resolver.next(true);
      }else{
         // 접근 권한이 없다면 로그인 화면으로 이동 시킨다
         router.push(LoginRoute(onResult: (success){
               // 로그인 화면에서의 결과에 따라 화면 이동 여부를 결정
               resolver.next(success);
          }));
         }
     }
}
```
