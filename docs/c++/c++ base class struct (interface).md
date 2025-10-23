# c++ struct interface

> struct와 pure virtual 함수를 사용하여 인터페이스를 만들 수 있다.

```cpp
#include <iostream>

// 인터페이스
struct ICamera {
    virtual void take() = 0;
};

class People {
public:
    void useCamera(ICamera* p) { p->take();}
};

class Camera : public ICamera {
public:
    void take()
    {
         std::cout << "take picture" << std::endl;
    }
};

class HDCamera : public ICamera {
public:
    void take()
    {
         std::cout << "take picture hd" << std::endl;
    }
};

int main() {
    People p;
    Camera c1;
    p.useCamera(&c1);

    HDCamera c2;
    p.useCamera(&c2);
}
```
