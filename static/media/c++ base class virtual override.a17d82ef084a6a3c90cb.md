# c++ class override

> 가상 함수 재정의 실수를 막기 위해서 사용하는 키워드

```cpp
#include <iostream>
#include <vector>

class Animal {
    public:
    virtual void cry() {
        std::cout << "Animal cry" << std::endl;
    }
};

class Dog : public Animal {
    public:
    // 가상 함수 오버라이드(override)
    virtual void cry() override { // virtual, override를 제거해도 빌드 되지만 실수 방지용
        std::cout << "Dog cry" << std::endl;
    }
};

int main() {
    Animal a;
    a.cry();
    Dog d;
    d.cry();

    Animal* p = &d;
    p->cry();
}
```
