# c++ base compiler =default

> 컴파일러에게 기본 생성자를 만들라고 알려주는 키워드

```cpp
class User{
    public:
    User() = default;
    User(const User& user) = delete;
    User& operator=(const User& user) = delete;
};
```
