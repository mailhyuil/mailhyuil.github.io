# c++ rvalue vs lvalue

> 모든 lvalue는 rvalue이지만 모든 rvalue가 lvalue는 아니다.

## lvalue

> 표현식 이후에도 사라지지 않는 값. 이름을 지니는 변수.
>
> > 메모리 주소를 가지고 있는 값.

```cpp
// e.g.
int a = 10;
int b = a; // a는 lvalue

// 참조
int& ref = a; // a의 참조
```

## rvalue

> 표현식 이후에는 사라지는 값. 임시 변수.
>
> > rvalue는 주소값을 가지고 있지 않아서 주소값을 취할 수 없다.

```cpp
// e.g.
int a = 10;
int b = 10;
int c = a + b; // a + b는 rvalue
int res = function(); // function()은 rvalue

// 참조
int&& res = function(); // function()의 반환값을 참조하는 변수
```
