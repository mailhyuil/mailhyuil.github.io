# c++ base class struct 구조체

> 하나 이상의 기본 타입을 가지고 새로운 자료형을 정의하는 사용자 정의 타입
>
> > c++에서는 class와 struct가 거의 동일하다. 다만, struct는 기본 접근 제어가 public이고, class는 private이다.
> >
> > > 구글에서는 struct 는 간단한 데이터들의 모음을 나타날 때 사용 (Plain Old Data)

```cpp
struct User {
  string username;
  string password;
  string email;
  int age;
}
```
