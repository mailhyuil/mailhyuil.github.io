## c++ header functional

> 함수를 1급 객체로 다루기 위한 헤더

```cpp
#include <functional>
#include <iostream>

int someFn(){
    return 1;
}

int main(){
    std::function<int()> fn = someFn;
    std::cout << fn() << std::endl;
}
```
