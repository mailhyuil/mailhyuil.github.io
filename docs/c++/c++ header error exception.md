# c++ header error exception

```cpp
#include <exception>
#include <iostream>

class Parent : public std::exception {
 public:
  // what 은 std::exception 에 정의된 함수로, 이 예외가 무엇인지 설명하는 문자열을
  // 리턴하는 함수 입니다.
  virtual const char* what() const noexcept override { return "Parent!\n"; }
};

class Child : public Parent {
 public:
  const char* what() const noexcept override { return "Child!\n"; }
};

int func(int c) {
  if (c == 1) {
    throw Parent();
  } else if (c == 2) {
    throw Child();
  }
  return 0;
}

int main() {
  int c;
  std::cin >> c;

  try {
    func(c);
  } catch (Child& c) {
    std::cout << "Child Catch!" << std::endl;
    std::cout << c.what();
  } catch (Parent& p) {
    std::cout << "Parent Catch!" << std::endl;
    std::cout << p.what();
  }
}
```
