# c++ iostream

> c++의 모든 입출력 클래스는 ios_base 클래스를 상속받는다.

```cpp
// istream
std::cin
std::cin.ignore()
std::cout
std::cerr
std::clog

std::istream // input stream
std::ostream // output stream
std::getline(cin, str)

// flags
// 스트림의 상태에 따라 아래의 플래그가 1로 바뀐다.
std::ios_base::goodbit
std::ios_base::badbit
std::ios_base::failbit
std::ios_base::eofbit
```

## 스트림의 상태를 관리하는 플래그

```cpp
#include <iostream>
#include <string>

// cin >> t에서 t에 문자열을 입력하면 failbit가 켜진다.
int main() {
  int i;
  while (std::cin >> i) {
    std::cout << "입력 :: " << i << std::endl;
    if (i == 0) break;
  }
  return 0;
}

// cin.fail() 사용
int main() {
  int i;
  while (true) {
    std::cin >> i;
    if (std::cin.fail()) {
      std::cout << "제대로 입력해주세요" << std::endl;
      std::cin.clear();           // 플래그 초기화
      std::cin.ignore(100, '\n'); // 개행문자를 무시
      continue;
    }
    std::cout << "입력 :: " << i << std::endl;
    if (i == 0) break;
  }
  return 0;
}
```
