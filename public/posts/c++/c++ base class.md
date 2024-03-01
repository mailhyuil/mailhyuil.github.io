# c++ class

```cpp
#include <iostream>

class User {
    std::string name;
    std::string password;
    std::string *address;

    public:
    // 기본 생성자 (아무것도 안하는 생성자)
    User() : name("default"), password("default"), address(nullptr) {} // address를 nullptr로 초기화합니다.

    // 매개변수가 있는 생성자
    User(std::string _name, std::string _password) {
        name = _name;
        password = _password;
        address = nullptr;
    }

    // 소멸자 (클래스가 소멸될 때 호출됨)
    ~User() {
      std::cout << "Bye Bye~ " << name << "\n\r";
      if (address != nullptr){
        delete address;
      }
    }

    void setAddress(std::string _address) {
        address = new std::string(_address);
    }

    void printInfo() {
        std::cout << "name: " << name << "\n\r";
        std::cout << "password: " << password << "\n\r";
        if (address != nullptr) {
            std::cout << "address: " << *address << "\n\r";
        } else {
            std::cout << "address: Not set\n\r";
        }
    }
};

int main(){
  User user1; // 기본 생성자 호출
  User user2("John", "1234"); // 매개변수 생성자 호출
  user2.setAddress("Seoul");

  user1.printInfo();
  user2.printInfo();
  return 0;
}
```
