# c++ base class 생성자 & 소멸자

> 생성자를 작성하지 않으면 컴파일러가 자동으로 디폴트 생성자를 생성해준다.
>
> 다른 생성자를 추가한 경우 디폴트 생성자를 생성하지 않는다.
>
> > 동적으로 생성된 값들은 객체가 소멸되어도 메모리가 해제되지 않는다. 이를 해결하기 위해 소멸자를 사용한다.
> >
> > > 소멸자에서 메모리를 해제해줘야한다.
> > >
> > > > C++ 11 에서 부터 소멸자들은 기본적으로 noexcept 입니다. 절대로 소멸자에서 예외를 던지면 안됩니다.

```cpp
#include <iostream>
class User {
    std::string name;
    std::string password;
    std::string* address;

    public:
    // 기본 생성자 (아무것도 안하는 생성자)
    User() : address(nullptr) {} // address를 nullptr로 초기화합니다.

    // 매개변수가 있는 생성자
    User(std::string _name, std::string _password) {
        name = _name;
        password = _password;
    }

    // 소멸자 (클래스가 소멸될 때 호출됨)
    ~User() {
      std::cout << "Bye Bye~ " << name << "\n\r";
      delete address;
    }

    void setAddress(std::string _address) {
        address = new std::string(_address);
    }
};
int main(){
  User user1; // 기본 생성자 호출
  User user2("John", "1234"); // 매개변수 생성자 호출
  user2.setAddress("Seoul");
  return 0;
}
```
