# c++ header string string_view

> 문자열을 전달할 때 읽기 만 필요로 할ㄴ다면 `std::string_view`를 사용하자.
>
> > const std::string& 또는 const char\* 과 비슷하지만, 메모리를 복사하지 않는다.
> >
> > > 소유하지 않고 읽기만 한다!

```cpp
#include <iostream>
#include <string>

int main() {
    std::string s = "Hello, World!";
    std::string_view sv = s;
    std::cout << sv << std::endl;
    return 0;
}
```
