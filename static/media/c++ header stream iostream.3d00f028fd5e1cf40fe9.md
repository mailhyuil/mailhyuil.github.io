# c++ iostream

> c++의 모든 입출력 클래스는 ios_base 클래스를 상속받는다.

```cpp
// istream
std::cin
std::cout
std::cerr
std::clog

std::istream // input stream
std::ostream // output stream
std::getline(cin, str)
```

## 스트림의 상태를 관리하는 플래그

> 스트림의 상태에 따라 아래의 플래그가 켜진다.

```cpp
std::ios_base::goodbit
std::ios_base::badbit
std::ios_base::failbit
std::ios_base::eofbit

// 해결 방안
#include <iostream>
#include <string>

int main() {
  int t;
  while (std::cin >> t) { // <- 고의로 문자를 입력하면 failbit가 켜진다.
    std::cout << "입력 :: " << t << std::endl;
    if (t == 0) break;
  }
}

// 조작자의 사용
#include <iostream>
#include <string>

int main() {
  int t;
  while (true) {
    std::cin >> std::hex >> t;
    std::cout << "입력 :: " << t << std::endl;
    if (std::cin.fail()) {
      std::cout << "제대로 입력해주세요" << std::endl;
      std::cin.clear();           // 플래그들을 초기화 하고
      std::cin.ignore(100, 'n');  //개행문자가 나올 때까지 무시한다
    }
    if (t == 0) break;
  }
}
```
