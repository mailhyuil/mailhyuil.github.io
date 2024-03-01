# c++ 상속

> c++은 다중 상속을 지원한다.

```cpp
class Derived : public Base {
  std::string s;

 public:
  Derived() : Base(), s("파생") {
     std::cout << "파생 클래스" <<  std::endl;

    // Base 에서 what() 을 물려 받았으므로
    // Derived 에서 당연히 호출 가능하다
    what();
  }
};

// 다중 상속
class Derived : public Base, public Base2 {
  std::string s;

 public:
  Derived() : Base(), s("파생") {
     std::cout << "파생 클래스" <<  std::endl;

    // Base 에서 what() 을 물려 받았으므로
    // Derived 에서 당연히 호출 가능하다
    what();
  }
};
```
