# c++ base pointer 배열

> 단순히 배열 요소에 접근할 때는 첫번째 방법
>
> > 배열 전체를 다룰 때는 두번째 방법을 사용

```cpp
#include <iostream>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    int* p; // 배열의 첫번째 원소를 담을 포인터
    p = arr;

    std::cout << p[0] << std::endl; // 1
    std::cout << p[1] << std::endl; // 2

    int (*q)[5]; // 배열 전체를 담을 포인터
    q = &arr;

    std::cout << (*q)[0] << std::endl; // 1
    std::cout << (*q)[1] << std::endl; // 2

    return 0;
}
```
