# c++ type 배열

```cpp
int arr[5];              // 정수형 배열 5개 크기의 메모리 할당 // 쓰레기값이 들어있다.
int arr[] = {1, 2, 3};   // 정수형 배열 3개 크기의 메모리 할당 및 초기화

int *arr[100];           // 정수형 포인터 배열 // default nullptr로 초기화된다. nullptr = 0x0
arr[0] = new int;        // 정수형 포인터 배열에 동적할당 // default 0으로 초기화된다.
arr[1] = new int(10);    // 정수형 포인터 배열에 동적할당 및 초기화
*arr[0] = 10;            // 동적할당된 메모리에 값 할당
delete arr[0];           // 동적할당 해제

int *arr = new int[100]; // 동적할당 // default 0으로 초기화된다.
arr[0] = 10;             // 동적할당된 메모리에 값 할당
delete[] arr;            // 동적할당 해제
```
