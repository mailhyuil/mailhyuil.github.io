# c++ base type enum

```cpp
#include <iostream>

// 열거형 선언
enum Color {
    RED,    // 0
    GREEN,  // 1
    BLUE    // 2
};

int main() {
    // 열거형 변수 선언 및 초기화
    Color myColor = GREEN;

    // 열거형 상수 출력
    std::cout << "My favorite color is " << myColor << std::endl;

    return 0;
}
```
