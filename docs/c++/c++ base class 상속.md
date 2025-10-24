# c++ base class 상속

> c++은 다중 상속을 지원한다.

```cpp
#include <iostream>

class Base {
  public:
  Base() { std::cout << "기반 클래스" << std::endl; }

  virtual void what() { std::cout << "기반 클래스의 what()" << std::endl; }
};

class Derived : public Base {
 public:
  // : Base()는 super와 같은 역할
  Derived() : Base() { std::cout << "파생 클래스" << std::endl; }

  void what() { std::cout << "파생 클래스의 what()" << std::endl; }
};

int main() {
  Base p;
  Derived c; // 힙에 객체를 생성

  Base* p_c = &c;
  Base* p_p = &p; // 힙의 객체를 가리키는 주소를 Base 타입의 포인터에 저장

  std::cout << " == 실제 객체는 Base == " << std::endl;
  p_p->what();

  std::cout << " == 실제 객체는 Derived == " << std::endl;
  p_c->what();

  return 0;
}
```
