# c++ header stream fstream & ifstream & ofstream

> file stream

## 함수

```cpp
std::ifstream // input file stream
std::ofstream // output file stream

std::ifstream::open
std::ifstream::close
std::ifstream::is_open
std::ifstream in("test.txt", std::ios_base::binary);

std::ofstream::open
std::ofstream::close
std::ofstream::is_open
std::ofstream out("test.txt", std::ios_base::binary);
```

## 파일 읽기

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main() {
  // 파일 읽기 준비
  std::ifstream in("test.txt");
  std::string s;

  if (in.is_open()) {
    in >> s;
    std::cout << "입력 받은 문자열 :: " << s << std::endl;
  } else {
    std::cout << "파일을 찾을 수 없습니다!" << std::endl;
  }

  in.close();
  return 0;
}
```

## 파일 쓰기

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main() {
  // 파일 쓰기 준비
  std::ofstream out("test.txt");

  if (out.is_open()) {
    out << "Hello, World!" << std::endl;
  } else {
    std::cout << "파일을 찾을 수 없습니다!" << std::endl;
  }

  out.close();
  return 0;
}
```
