# c++ base class virtual pure virtual - abstract

> virtual 함수를 구현하지 않고 = 0 을 붙여줌으로써 순수 가상 함수로 만든다.

## abstract class

> 순수 가상 함수를 하나 이상 가지고 있는 클래스
>
> > 객체를 생성할 수 없다.

```cpp
#include <iostream>

class Shape {
    public:
    virtual void Draw() = 0;
};

class Rect : public Shape {
    public:
    virtual void Draw() {} // 구현
};

int main() {
    // Shape s; // error
    Shape* p;

    Rect r;
}
```
