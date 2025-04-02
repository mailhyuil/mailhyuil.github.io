# c++ pointer shared pointer

> 참조한 모든 객체가 소멸되면 원본이 소멸

```cpp
#include <memory>

std::shared_ptr<User> user(new User());
```

## make_shared

```cpp
#include <memory>

std::vector<std::shared_ptr<User>> users;

vec.push_back(std::make_shared<User>());
vec.push_back(std::make_shared<User>());
vec.push_back(std::make_shared<User>());

// users[0] 은 3개의 shared_ptr 에 의해 가리키고 있다.
// 따라서, users[0] 을 가리키는 shared_ptr 의 수는 3이다.

vec.erase(vec.begin());
vec.erase(vec.begin());
vec.erase(vec.begin()); // users[0] 을 가리키는 shared_ptr 의 수는 0이 되었으므로, users[0] 을 해제한다.
```
