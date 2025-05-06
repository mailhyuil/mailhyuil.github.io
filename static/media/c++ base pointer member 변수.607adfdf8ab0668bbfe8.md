# c++ base pointer member 변수 pointer

> 동적으로 메모리를 할당하기 위해서 string은 포인터로 선언한다.
>
> > char*를 써도 되지만 string의 메소드를 사용하기 위해서 string*을 사용한다.

```cpp
#include <iostream>

class Vector {
  string* data; // string 배열의 첫 번째 원소에 대한 포인터
  int capacity;
  int length;

 public:
  Vector(int n = 1): data(new string[n]), capacity(n), length(0) {};
  ~Vector() { delete[] data; }
};

int main(){
  Vector* v = new Vector();
  return 0;
}
```
