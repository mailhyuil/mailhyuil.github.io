# flutter MVVM

## MODEL

> User라는 MODEL을 정의
>
> > MODEL에는 Service도 포함될 수 있음
> >
> > > angular의 DTO

```dart
class User {
  final String name;
  final int age;

  User({required this.name, required this.age});
}

class UserService {
  Future<User> getUser() async {
    // 네트워크 요청 등을 통해 실제 데이터를 가져오는 로직
    await Future.delayed(Duration(seconds: 1));
    return User(name: "John Doe", age: 30);
  }
}
```

## VIEW MODEL

> MODEL과 Service를 사용하여 VIEW에 보여질 데이터
>
> > MODEL과 VIEW의 중간다리 역할
> >
> > > angular의 TS파일
> > >
> > > > Notifier

```dart
import 'package:flutter/foundation.dart';

class UserViewModel extends ChangeNotifier {
  final UserService _userService = UserService();
  User? _user;

  User? get user => _user;

  Future<void> fetchUser() async {
    _user = await _userService.getUser();
    notifyListeners();
  }
}
```

## VIEW

> angular의 template.html
>
> > ConsumerWidget

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class UserView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User Information'),
      ),
      body: Center(
        child: Consumer<UserViewModel>( // Consumer를 사용하여 VIEW MODEL을 사용합니다.
          builder: (context, userViewModel, child) {
            if (userViewModel.user == null) {
              return CircularProgressIndicator();
            } else {
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('Name: ${userViewModel.user!.name}'),
                  Text('Age: ${userViewModel.user!.age.toString()}'),
                ],
              );
            }
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // 사용자 정보를 새로고침합니다.
          Provider.of<UserViewModel>(context, listen: false).fetchUser();
        },
        child: Icon(Icons.refresh),
      ),
    );
  }
}
```
