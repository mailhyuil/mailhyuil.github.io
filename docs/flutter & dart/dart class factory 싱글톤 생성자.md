# dart class factory 싱글톤 생성자

- 새로운 인스턴스를 생성하지 않는 생성자, 싱글톤 패턴을 구현할 때 사용
- \_cache (Map type), \_internal 등의 private 변수를 사용하여 싱글톤 패턴을 구현할 수 있음
- Use the factory keyword when implementing a constructor that doesn’t always create a new instance of its class

```dart
class Logger {
  final String name;
  bool mute = false;

  // private 캐시 생성
  static final Map<String, Logger> _cache = <String, Logger>{};

  // private 생성자
  Logger._internal(this.name);

  // 캐시에 존재하면 캐시에서 반환, 존재하지 않으면 생성
  factory Logger(String name) {
    return _cache.putIfAbsent(name, () => Logger._internal(name));
  }

  // json으로부터 생성
  factory Logger.fromJson(Map<String, Object> json) {
    return Logger(json['name'].toString());
  }

  void log(String msg) {
    if (!mute) print(msg);
  }
}
```
