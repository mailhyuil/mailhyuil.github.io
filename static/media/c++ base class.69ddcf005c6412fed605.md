# c++ class

```cpp
#include <iostream>

class User {
    std::string username;
    std::string password;
    public:
    User(std::string _username, std::string _password) {
        username = _username;
        password = _password;
    }
    ~User() {
        std::cout << "User object destroyed" << std::endl;
    }
    std::string getUsername(){
        return username;
    }
};

int main() {
    User user("admin", "admin");
    std::cout << user.getUsername() << std::endl;
    return 0;
}
```
