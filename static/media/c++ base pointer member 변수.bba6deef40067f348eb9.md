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
  // 생성자
  Vector(int n = 1);

  // 맨 뒤에 새로운 원소를 추가한다.
  void push_back(string s);

  // 임의의 위치의 원소에 접근한다.
  string operator[](int i);

  // x 번째 위치한 원소를 제거한다.
  void remove(int x);

  // 현재 벡터의 크기를 구한다.
  int size();

  ~Vector();
};

int main(){
  Vector* v = new Vector();
  return 0;
}
```
