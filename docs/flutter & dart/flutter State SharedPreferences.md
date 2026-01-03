# flutter State SharedPreferences

> 데이터를 로컬에 저장
>
> > 원시값만 저장 가능

## install

```sh
flutter pub add shared_preferences
```

## usage

```dart
import 'package:shared_preferences/shared_preferences.dart';

SharedPreferences sp = await SharedPreferences.getInstance();

//settter
sp.setString('key', 'value');

//getter
sp.getString('key');
sp.getStringList('key');

//delete
sp.remove('key');
```
