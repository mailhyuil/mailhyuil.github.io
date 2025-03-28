# c++ error noexcept

> noexcept 로 명시된 함수가 예외를 발생시키게 된다면 예외가 제대로 처리되지 않고 프로그램이 종료됩니다.

```cpp
#include <iostream>

int foo() noexcept {}

int bar() noexcept { throw 1; }

int main() {
  foo();
  try {
    bar();
  } catch (int x) {
    std::cout << "Error : " << x << std::endl;
  }
}
```
