# c++ base class

```cpp
#include <iostream>
#include <vector>
#include <memory>

class User {
    std::string name;
    std::string password;
    std::unique_ptr<std::vector<std::string>> contacts;

public:
    // 기본 생성자
    User() : name("default"), password("default"), contacts(std::make_unique<std::vector<std::string>>()) {}

    // 매개변수가 2개 있는 생성자
    User(std::string name, std::string password): name(name), password(password), contacts(std::make_unique<std::vector<std::string>>()) {}

    // 매개변수가 3개 있는 생성자
    User(std::string name, std::string password, const std::vector<std::string>& contacts): name(name), password(password), contacts(std::make_unique<std::vector<std::string>>(contacts)) {}

    // 복사 생성자 (깊은 복사)
    User(const User& _user) : name(_user.name), password(_user.password), contacts(std::make_unique<std::vector<std::string>>(*_user.contacts)) {}

    // 이동 생성자
    User(User&& _user) noexcept : name(std::move(_user.name)), password(std::move(_user.password)), contacts(std::move(_user.contacts)) {}

    // 대입 연산자의 오버로딩 (깊은 복사)
    User& operator=(const User& _user) {
        if (this != &_user) {
            name = _user.name;
            password = _user.password;
            contacts = std::make_unique<std::vector<std::string>>(*_user.contacts);
        }
        return *this;
    }

    void addContact(const std::string& contact) {
        contacts->push_back(contact);
    }

    void printInfo() {
        std::cout << "name: " << name << "\n";
        std::cout << "password: " << password << "\n";
        std::cout << "contacts: ";
        for (const auto& contact : *contacts) {
            std::cout << contact << ", ";
        }
        std::cout << "\n";
    }

    // 소멸자
    ~User() {
        std::cout << "Bye Bye~ " << name << "\n";
    }
};

int main(){
    User user("hyuil", "1234"); // 기본 생성자 호출
    user.addContact("010-7502-0301");
    user.addContact("mailhyuil@gmail.com");
    user.addContact("hyuil@naver.com");
    user.printInfo();
    return 0;
}
```
