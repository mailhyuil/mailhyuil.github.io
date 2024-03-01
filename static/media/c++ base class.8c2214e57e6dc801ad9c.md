# c++ class

```cpp
#include <iostream>

using namespace std;

class User {
public:
    string name;
    string password;

    // 생성자 정의에서 오타 수정
    User(string name, string password) {
        this->name = name;
        this->password = password;
    }

    // 소멸자 정의
    ~User() {
        cout << "Bye Bye~";
    }
    void say(){
        cout << "my name is " << this->name << "and my password is " << this->password << "\n\r";
    }
};

int main() {
    // 객체를 생성할 때 new 키워드는 필요 없음
    User user("sb", "1234");
    user.say();
    // delete 키워드는 사용하지 않아야 함
    // 객체가 범위를 벗어나면 자동으로 소멸자가 호출됨
    return 0;
}
```
