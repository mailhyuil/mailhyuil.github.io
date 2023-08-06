# flutter SharedPreferences

> 데이터를 로컬에 저장

## install

```sh
flutter pub add shared_preferences
```

## 사용

```dart
SharedPreferences sp = await SharedPreferences.getInstance();

//settter
sp.setString('key', 'value');

//getter
sp.getString('key');

//delete
sp.remove('key');
```
