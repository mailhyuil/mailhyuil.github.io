# c++ class 생성자 & 소멸자

> 동적으로 생성된 값들은 객체가 소멸되어도 메모리가 해제되지 않는다. 이를 해결하기 위해 소멸자를 사용한다.
>
> > 소멸자에서 메모리를 해제해줘야한다.

```cpp
class User {
private:
    string name;
    string password;
    string* address;
public:
    // 기본 생성자 (아무것도 안하는 생성자)
    User() = default;
    // 기본 생성자 (매개변수가 없는 생성자)
    User() {}

    // 매개변수가 있는 생성자
    User(string _name, string _password) {
        this->name = _name;
        this->password = _password;
    }

    // 소멸자 (클래스가 소멸될 때 호출됨)
    ~User() {
      cout << "Bye Bye~ " << this->name << "\n\r";
      delete this->address;
    }

    void setAddress(string _address) {
        this->address = new string(_address);
    }
};
int main(){
  User user1; // 기본 생성자 호출
  User user2("John", "1234"); // 매개변수 생성자 호출

  User hyuil("hyuil", "1234");
  hyuil.setAddress("Seoul");

  return 0;
}
```
