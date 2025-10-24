# c++ base class 생성자 이동 생성자

> rvalue 레퍼런스를 사용
>
> > T&&를 사용
> >
> > > 이동 생성자는 반드시 noexcept로 선언되어야 한다.
> > >
> > > > 복사 생성보다 빠르다.

```cpp
T(T&& a) noexcept {};
// User(User&& _user) noexcept {
//   name = _user.name;
// };
```
