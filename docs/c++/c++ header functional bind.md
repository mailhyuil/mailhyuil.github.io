## c++ header bind

> 멤버 함수를 1급 객체로 다루기 위한 헤더

```cpp
void subtract(int x, int y) {
  std::cout << x << " - " << y << " = " << x - y << std::endl;
}

auto negate = std::bind(subtract, std::placeholders::_2, std::placeholders::_1);
```
