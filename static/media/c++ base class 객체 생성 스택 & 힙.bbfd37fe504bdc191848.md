# c++ base pointer literal

> stack에 생성 시 함수가 종료되면 자동으로 메모리 해제된다.
>
> > heap에 생성 시 함수가 종료되어도 메모리 해제가 되지 않는다.
> >
> > heap에 생성 시 메모리 해제를 해주어야 한다.

```cpp
#include <iostream>

class User {
    std::string name;
    public:
    User(std::string name): name(name) {
        std::cout << "User " << name << " created!" << std::endl;
    }
    ~User() {
        std::cout << "User " << name << " destroyed!" << std::endl;
    }
    std::string getName(){
        return name;
    }
};

void print(User user) {
    std::cout << "User name is " << user.getName() << std::endl;
}

int main(){
    User user1("sangbaek"); // 스택에 생성
    User *user2 = new User("hyuil"); // 힙에 생성

    print(user1);
    print(*user2);
    return 0;
}
```
