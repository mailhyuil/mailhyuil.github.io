# c++ base class overload method

> c에서는 오버로드 기능을 제공하지 않지만 c++은 제공한다.
>
> > 컴파일러가 알아서 적합한 인자를 가지는 함수 를 찾아서 호출한다.
> >
> > > 동작 과정
> > >
> > > 1. 자신과 타입이 정확히 일치하는 함수를 찾는다.
> > >
> > > 2. 위의 동작 실패 시 형변환을 통해서 일치하는 함수를 찾는다. (e.g. char, unsigned char, short -> int)
> > >
> > > 3. 위의 동작 실패 시 더 포괄적인 방법으로 찾는다. (e.g. float -> int, Enum -> double)
> > >
> > > 4. 위의 동작 실패 시 유저 정의된 타입 변환으로 일치하는 것을 찾는다.

```cpp
#include <iostream>

void print(int x) { std::cout << "int : " << x << std::endl; }
void print(char x) { std::cout << "char : " << x << std::endl; }
void print(double x) { std::cout << "double : " << x << std::endl; }

int main() {
  int a = 1;
  char b = 'c';
  double c = 3.2f;

  print(a);
  print(b);
  print(c);

  return 0;
}
```
