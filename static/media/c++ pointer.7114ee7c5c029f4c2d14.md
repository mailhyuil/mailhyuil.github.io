# c++ pointer

```cpp
int i = 4;              // 정수형 변수. short 없음
int* p = &i;            // 포인터 변수. i의 주소를 가리킴
int** pp = &p;          // 포인터의 포인터 변수. p의 주소를 가리킴
int*** ppp = &pp;       // 포인터의 포인터의 포인터 변수. pp의 주소를 가리킴

void print(string name);
void (*print_ptr)(string) = &print; // 함수 포인터 변수. print 함수의 주소를 가리킴
```
