# c++ base class virtual

> 부모 클래스의 함수에 virtual을 붙이면
>
> > 컴파일러가 해당 가상 함수를 만나면 인스턴스의 타입을 확인하고, 해당 타입에 맞는 함수를 호출한다.
> >
> > > 자식 클래스의 객체를 가리키는 포인터가 호출하는 함수가 파생 클래스의 버전으로 동작하도록 보장

```cpp
#include <iostream>

class Base {
  public:
  Base() { std::cout << "기반 클래스" << std::endl; }

  virtual void what() { std::cout << "기반 클래스의 what()" << std::endl; }
};

class Derived : public Base {
 public:
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
