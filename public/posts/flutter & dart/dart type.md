# dart type

## 원시타입

```dart
String

bool

num // int, double의 부모
int
double
```

## collection

```dart
// List
var nums = [1,2,3,4];
List<int> nums = [1,2,3,4]
List<int>[1, 2, 3, 4]

// Map
var info = {
    'name': 'hyuil',
    'age': 12,
}
Map<String, String> info = {
    'name': 'hyuil',
    'age': '12',
}
Map<String, String> {}

// Set
Set<int> nums = {1,2,3,4};
Set<int> nums = Set.from([1,2,3,4]);
Set<int> {}
```
