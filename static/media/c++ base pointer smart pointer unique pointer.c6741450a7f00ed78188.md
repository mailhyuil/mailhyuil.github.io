# c++ pointer unique pointer

> 특정 객체에 유일한 소유권을 부여하는 포인터 객체를 unique_ptr 라고 합니다.

## 소유권이 없어서 발생하는 double free 문제

> delete를 두번 호출하여 에러가 발생한다.

```cpp
User* user = new User();
User* user2 = user;

// user 의 입장 : 사용 다 했으니 소멸시켜야지.
delete user;

// user2 의 입장 : 나도 사용 다 했으니 소멸시켜야지
delete user2; // double free error!!
```

## usage

```cpp
#include <memory>

// 일반 포인터
User* user = new User();

// 유니크 포인터
void doSomething(){
    std::unique_ptr<User> user(new User());
    user->something();
}
// 유티크 포인터를 사용한 user는 스택에 정의된 객체이기 때문에
// 함수가 종료되면 자동으로 소멸된다.
```

## make_unique

```cpp
#include <memory>

// make_unique를 사용하여 쉽게 생성할 수 있다.
void doSomething(){
    std::unique_ptr<User> user = std::make_unique<User>();
    user->something();
}
```

## 소유권 이전

> move 함수를 사용하여 소유권을 이전할 수 있다.
>
> > 소유권이 이전된 unique_ptr 를 댕글링 포인터(dangling pointer) 라고 하며 이를 재 참조할 시에 런타임 오류가 발생하도록 합니다.
> >
> > 따라서 소유권 이전은, 댕글링 포인터를 절대 다시 참조 하지 않겠다는 확신 하에 이동해야 합니다.

```cpp
void doSomething() {
  std::unique_ptr<User> user(new User());
  std::cout << "user : ";
  user->something();

  // user2 에게 소유권을 이전.
  std::unique_ptr<User> user2 = std::move(user);
  std::cout << "user2 : ";
  user2->something();
}
```
