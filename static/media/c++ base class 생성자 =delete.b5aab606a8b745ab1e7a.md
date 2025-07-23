# c++ base compiler =delete

> 컴파일러에게 이 생성자는 사용하지 말라고 알려주는 키워드

```cpp
class User{
    public:
    User() = default;
    User(const User& user) = delete;
    User& operator=(const User& user) = delete;
};
```
