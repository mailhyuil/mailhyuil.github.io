# c++ generic template meta programming (메타 프로그래밍)

> 타입은 반드시 컴파일 타임에 확정되어야 하므로, 컴파일 타임에 모든 연산이 끝나게 됩니다.
>
> > 이렇게 타입을 가지고 컴파일 타임에 생성되는 코드로 프로그래밍을 하는 것을 메타 프로그래밍(meta programming) 이라고 합니다.
> >
> > 컴파일 타임에 복잡한 연산이나 논리를 수행
> >
> > > 템플릿 메타 프로그래밍의 단점
> > >
> > > 컴파일 시간이 늘어난다.
> > >
> > > 프로그래밍이 복잡하다.
> > >
> > > 디버깅이 불가능하다.
> > >
> > > 오류 시에 엄청난 길이의 오류를 내뿜게 됩니다.

```cpp
#include <iostream>

template <int N>
struct Factorial {
    static const int value = N * Factorial<N - 1>::value;
};

template <>
struct Factorial<0> {
    static const int value = 1;
};

int main() {
    // <5>를 넣어서 N을 5로 확정시키면 컴파일 타임에 Factorial<5>::value가 120으로 확정된다.
    std::cout << Factorial<5>::value << std::endl;
    return 0;
}
```
