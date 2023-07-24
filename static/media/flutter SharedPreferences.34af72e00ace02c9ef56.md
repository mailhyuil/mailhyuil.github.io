# flutter SharedPreferences

> 데이터를 로컬에 저장

## install

```
flutter pub add shared_preferences
```

## 사용

```dart
SharedPreferences sp = await SharedPreferences.getInstance();

//settter
await sp.setString('testKey', 'setter test');

//getter
String testString  = sp.getString();

//delete
bool isDeleted = await sp.remove('testKey');
```
