# c++ class

```cpp
#include <iostream>
#include <vector>

class User {
    std::string name;
    std::string password;
    std::vector<std::string>* contacts;

    public:
    // 기본 생성자
    User() : name("default"), password("default"), contacts(new std::vector<std::string>()) {}

    // 매개변수가 2개 있는 생성자
    User(std::string name, std::string password): name(name), password(password), contacts(new std::vector<std::string>()) {}

    // 매개변수가 3개 있는 생성자
    User(std::string name, std::string password, std::vector<std::string> contacts): name(name), password(password), contacts(new std::vector<std::string>(contacts)) {}

    // 복사 생성자
    User(const User& _user): name(_user.name), password(_user.password), contacts(_user.contacts) {}

    // 이동 생성자
    User(User&& _user) noexcept : name(_user.name), password(_user.password), contacts(_user.contacts) {}

    // 소멸자
    ~User() {
      std::cout << "Bye Bye~ " << name << "\n\r";
      if (contacts != nullptr){
        delete contacts;
      }
    }

    void addContact(std::string contact) {
        contacts->push_back(contact);
    }

    void printInfo() {
        std::cout << "name: " << name << "\n\r";
        std::cout << "password: " << password << "\n\r";
        std::cout << "contacts: ";
        for (auto contact : *contacts) {
            std::cout << contact << " ";
        }
        std::cout << "\n\r";
    }
};

int main(){
  User* user = new User("sb", "1234"); // 기본 생성자 호출
  user->addContact("hyuil1234");
  user->printInfo();
  delete user;
  return 0;
}
```
