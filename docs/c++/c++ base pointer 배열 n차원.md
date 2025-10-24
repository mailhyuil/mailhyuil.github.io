# c++ base pointer 배열 n차원

```cpp
#include <iostream>

int main() {
    int** arr2D;
    const int length = 10;
    arr2D = new int*[length];

    for (int i = 0; i < length; i++) {
        arr2D[i] = new int[length];
    }

    // 2차원 배열의 첫 번째 행의 첫 번째 열의 원소에 접근
    std::cout << arr2D[0][0] << std::endl;
    // 2차원 배열의 첫 번째 행의 첫 번째 열의 주소를 출력 (포인터 산술)
    std::cout << *arr2D[0] << std::endl;

    // 메모리 해제 (반드시 필요)
    for (int i = 0; i < length; i++) {
        delete[] arr2D[i];
    }
    delete[] arr2D;

    return 0;
}
```
