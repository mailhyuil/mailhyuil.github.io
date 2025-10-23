# c++ base pointer call by value & call by reference

## call by value

> 값을 복사하여 전달하는 방식 (복사 생성자가 호출된다.)
>
> > 메모리 사용량이 많다.
> >
> > > 원본 데이터가 변경되지 않는다.
> > >
> > > > 매개변수에 아무것도 붙이지 않는다.

```cpp
#include <iostream>

void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5;
    int y = 10;
    std::cout << "Before swap: " << x << " " << y << std::endl;
    swap(x, y);
    std::cout << "After swap: " << x << " " << y << std::endl;
    return 0;
}
```

## call by reference

> 메모리 주소를 전달하는 방식
>
> > call by value와 달리 메모리 주소를 전달하기 때문에 메모리 사용량이 적다.
> >
> > > 원본 데이터가 변경된다.
> > >
> > > > 매개변수에 &를 붙여서 사용한다.

```cpp
#include <iostream>

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5;
    int y = 10;
    std::cout << "Before swap: " << x << " " << y << std::endl;
    swap(x, y);
    std::cout << "After swap: " << x << " " << y << std::endl;
    return 0;
}
```
