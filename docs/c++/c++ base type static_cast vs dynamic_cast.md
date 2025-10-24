# c++ static_cast vs dynamic_cast

> `*_cast<new_type>(expression)` 으로 사용

## static_cast

> 컴파일 시간에 타입을 변환

```cpp
int i = 10;
double d = static_cast<double>(i); // 정수를 실수로 변환
```

## dynamic_cast

> 런타임 시간에 타입을 변환

```cpp
class Base {
    virtual void foo() {}
};
class Derived : public Base {
    // ...
};
int main () {
    Base* base_ptr = new Derived;
    Derived* derived_ptr = dynamic_cast<Derived*>(base_ptr);

    if (derived_ptr != nullptr) {
        // dynamic_cast가 성공한 경우
    } else {
        // dynamic_cast가 실패한 경우
    }
}
```
