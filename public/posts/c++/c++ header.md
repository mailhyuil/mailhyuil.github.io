# c++ header

> .h file은 interface를 정의하는 파일이다.
>
> > cc 파일로 인터페이스를 구현한다.

## 헤더파일 생성

> add.h

```cpp
#ifndef MY_HEADER_H
#define MY_HEADER_H

#define MAX_LENGTH 100

namespace Math {
    int add(int a, int b);
}

#endif
```

## 헤더파일 구현

> 구현파일을 따로 만들 수도 있다.

```cpp
#include "add.h"

// 함수 구현
int add(int a, int b) {
    return a + b;
}
```

## usage

```cpp
// 표준 라이브러리 헤더파일
#include <iostream.h> // 구버전
#include <iostream> // 신버전

// 사용자 정의 헤더파일
#include "add.h"
```
