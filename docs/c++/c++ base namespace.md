# c++ namespace

> std는 C++ 표준 라이브러리에 있는 모든 것들이 포함된 namespace이다.

```cpp
// header1.h 의 내용
namespace header1 {
    int foo();
    void bar();
}

header1::foo();

namespace parent {
    namespace child {
        int foo();
    }
}

parent::child::foo();
```
