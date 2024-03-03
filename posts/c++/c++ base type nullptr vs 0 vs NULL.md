# c++ base type nullptr vs 0 vs NULL

## 0

> C언어와 옛날 C++에서 사용되던 NULL은 0으로 정의되어있다. 그래서 0과 NULL은 같은 의미로 사용된다.
>
> > pointer를 초기화할 때 사용된다.

## NULL

> c 언어에서 사용되던 NULL은 0으로 정의되어있다. 그래서 0과 NULL은 같은 의미로 사용된다.

```cpp
#ifndef NULL
#define NULL 0
#endif
```

## nullptr

> nullptr은 0번째 주소를 가리키는 포인터다.
>
> > NULL은 "0"이지만 nullptr은 "0x0"이다.

```cpp
if (ptr == nullptr) {
    // do something
}
```
