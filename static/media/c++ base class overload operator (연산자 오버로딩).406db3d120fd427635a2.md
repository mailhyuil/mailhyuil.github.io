# c++ overload operator (연산자 오버로딩)

> 클래스나 구조체간의 연산을 사용자 정의로 정의하는 방법

```cpp
class Vector {
 public:
  int x, y;

  Vector(int x, int y) : x(x), y(y) {}

  // 연산자 오버로딩
  Vector operator+(const Vector& v) {
    return Vector(x + v.x, y + v.y);
  }
};

int main() {
  Vector v1(1, 2);
  Vector v2(3, 4);

  Vector v3 = v1 + v2;

  return 0;
}
```
