# c++ base class friend

> A 클래스 내부에서 "friend class B" 를 사용하면
>
> > B 클래스는 A 클래스의 private 멤버에 접근할 수 있습니다.
> >
> > friend 로 정의된 클래스나 함수들은 원래 클래스의 private 로 정의된 변수나 함수들에 접근할 수 있습니다.

```cpp
class A {
 private:
  void private_func() {}
  int private_num;

  // B 는 A 의 친구!
  friend class B;
  // func 은 A 의 친구!
  friend void func();
};

class B {
 public:
  void b() {
    A a;

    // 비록 private 함수의 필드들이지만 친구이기 때문에 접근 가능하다.
    a.private_func();
    a.private_num = 2;
  }
};

void func() {
  A a;

  // 비록 private 함수의 필드들이지만 위와 마찬가지로 친구이기 때문에 접근
  // 가능하다.
  a.private_func();
  a.private_num = 2;
}

int main() {}
```
