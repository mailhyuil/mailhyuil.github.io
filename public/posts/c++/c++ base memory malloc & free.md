# c++ memory malloc & free

> heap 영역에 메모리를 동적으로 할당하고 해제하는 방법

```cpp
#include <iostream>

int main() {
    int* ptr = (int*)malloc(sizeof(int));
    *ptr = 10;
    std::cout << *ptr << std::endl;
    free(ptr);
    return 0;
}
```
