# c++ base memory malloc & free

> heap 영역에 메모리를 동적으로 할당하고 해제하는 방법
>
> > malloc (memory allocation 엠얼록 / 말록)
> >
> > calloc (clear memory allocation 캘록)
> >
> > realloc (reallocate memory 리얼록)
> >
> > free 함수를 사용한다.

```cpp
#include <iostream>

int main() {
    int* ptr = (int*)malloc(sizeof(int)); // int 크기만큼 heap 영역에 메모리를 할당한다.
    // int* ptr = (int*)malloc(sizeof(int) * 10); // int 10개 크기만큼 heap 영역에 메모리를 할당한다. (배열)

    *ptr = 10; // heap 영역에 할당된 메모리에 값을 저장한다.

    std::cout << *ptr << std::endl; // 10

    free(ptr); // heap 영역에 할당된 메모리를 해제한다.

    return 0;
}
```
