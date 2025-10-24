# c++ base pointer smart pointer weak pointer

> 객체가 소멸되면 weak_ptr의 참조도 소멸
>
> > 객체를 소유하지 않고 참조만
> >
> > > shared_ptr 로 하게 된다면 앞서 본 순환 참조 문제가 발생하는 경우

```cpp
#include <memory>

std::vector<std::weak_ptr<User>> users;
```

## lock

> weak_ptr 가 가리키는 객체가 아직 메모리에서 살아 있다면 (즉 참조 개수가 0 이 아니라면) 해당 객체를 가리키는 shared_ptr 을 반환하고,
>
> > 이미 해제가 되었다면 아무것도 가리키지 않는 shared_ptr 을 반환 합니다.

```cpp
#include <memory>

std::shared_ptr<User> sharedUser = users.lock();
```
