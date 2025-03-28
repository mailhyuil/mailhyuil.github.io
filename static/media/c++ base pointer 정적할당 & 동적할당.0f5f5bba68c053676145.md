# c++ pointer 정적할당 & 동적할당

> 정적할당은 컴파일 시간에 메모리를 할당되고 컴파일러에 의해 해제된다. (스택 메모리)
>
> > 동적할당은 런타임 시간에 메모리를 할당되고 프로그래머에 의해 해제된다. (힙 메모리)

```cpp
// 정적 할당
int x = 10;
int* ptr = &x;
// 자동으로 메모리 해제

User user1;
User user2("name", "password");
// 자동으로 메모리 해제


// 동적 할당
int* ptr = new int;
delete ptr; // 수동으로 메모리 해제

User* user = new User();
delete user; // 수동으로 메모리 해제
```
