# dart Future

> js의 Promise와 같은 API

## then 사용

```dart
Future<int> fetchNumber() {
  return Future.delayed(Duration(seconds: 2), () => 42);
}

void main() {
  print('Start');
  fetchNumber()
    .then((value) {
      print('Number: $value');
    })
    .catchError((error) {
      print('Error: $error');
    })
    .whenComplete(() {
      print('Completed');
    });
  print('End');
}
```

## async & await 사용

```dart
Future<int> fetchNumber() {
  return Future.delayed(Duration(seconds: 2), () => 42);
}

Future<void> main() async {
  print('Start');
  try {
    int number = await fetchNumber();
    print('Number: $number');
  } catch (error) {
    print('Error: $error');
  } finally {
    print('Completed');
  }
  print('End');
}
```
