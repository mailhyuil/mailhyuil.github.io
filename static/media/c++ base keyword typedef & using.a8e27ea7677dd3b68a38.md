# c++ base keyword typedef & using

> 기존의 자료형에 새로운 이름을 붙이는 키워드
>
> > using을 사용하면 같은 기능을 더 간결하게 사용할 수 있다.

```cpp
typedef int Integer; // int를 Integer로 정의
// 사용 예시
Integer num = 5;

typedef void (*func)(int, int);
using func = void (*)(int, int);
```
