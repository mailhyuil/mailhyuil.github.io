# c++ header utility move

> lvalue를 rvalue로 변환해주는 함수

```cpp
#include <iostream>
#include <utility>

template <typename T>
void my_swap(T &a, T &b) {
  T tmp(std::move(a));
  a = std::move(b);
  b = std::move(tmp);
}

int main() {
  std::string a = "a";
  std::string b = "b";

  my_swap(a, b);

  std::cout << a << " " << b << std::endl; // b a
}
```
