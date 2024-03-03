# c++ pointer shared pointer

> shared_ptr 로 객체를 가리킬 경우, 다른 shared_ptr 역시 그 객체를 가리킬 수 있습니다.
>
> > 특정 자원을 몇 개의 객체에서 가리키는지를 추적한 다음에, 그 수가 0이 되야만 비로소 해제를 시켜주는 방식의 포인터

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
