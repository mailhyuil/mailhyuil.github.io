# c++ header sstream

> string stream 문자열 스트림

```cpp
#include <iostream>
#include <sstream>

int main() {
  std::istringstream ss("HELLO WORLD");
  std::string x;

  ss >> x;

  std::cout << "입력 받은 데이터 :: " << x << std::endl;

  return 0;
}
```
