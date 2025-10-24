# c++ base pointer reference & 과 &&

> c언어에서는 오직 포인터만을 사용하여 주소를 전달할 수 있었지만, c++에서는 참조를 사용하여 주소를 전달할 수 있다.
>
> > &는 스토리지를 사용하지 않는 alias다.

```cpp
int a = 10;
int* b = &a;
*b = 20; // 변수 a의 값을 변경합니다.

int a = 10;
int& b = a;
b = 20; // 변수 a의 값을 변경합니다.
```

## c 방식

> 매개변수에 *를 붙이고 함수 내에서도 *를 붙여서 사용해야 한다.

```c
#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5;
    int y = 10;
    printf("Before swap: %d %d\n", x, y);
    swap(&x, &y);
    printf("After swap: %d %d\n", x, y);
    return 0;
}
```

## c++ 방식

> 매개변수에 &를 붙이고 함수 내에서는 그냥 변수를 사용하면 된다.

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

## & = lvalue

> 표현식 이후에도 사라지지 않는 값. 이름을 지니는 변수는 &를 붙여서 참조로 사용할 수 있다.
>
> > 메모리 주소를 가지고 있는 값.

```cpp
// e.g.
int a = 10;
int b = a; // a는 lvalue

// 참조
int& ref = a; // a의 참조
```

## && = rvalue

> 표현식 이후에는 사라지는 값. 임시 변수는 &&를 붙여서 참조로 사용할 수 있다.

```cpp
// e.g.
int a = 10;
int b = 10;
int c = a + b; // a + b는 rvalue
int res = function(); // function()은 rvalue

// 참조
int$$ res = function(); // function()의 반환값을 참조하는 변수
```
