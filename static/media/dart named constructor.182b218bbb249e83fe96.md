# dart Named Constructor

> constructor에 이름을 붙여서 여러개의 constructor를 만들 수 있음

```dart
/// Default constructor ///
Point(double x, double y) {
    // See initializing formal parameters for a better way
    // to initialize instance variables.
    this.x = x;
    this.y = y;
}
/// Shorthand constructor ///
Point(this.x, this.y);

/// Named constructor ///
// ClassName.constructorName() : /* constructor params */ ;

Point(this.x, this.y);

Point.fromXY1()
    : x = xOrigin,
    y = yOrigin;

Point.fromXY2(double x, double y)
    : x = xOrigin,
    y = yOrigin;
```
