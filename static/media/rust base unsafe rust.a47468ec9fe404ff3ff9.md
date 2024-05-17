# unsafe rust

## usage 이유

1. 로우 포인터를 역참조할 때
2. static mut 값에 접근할 때
3. 안전하지 않은 함수를 호출할 때
4. 안전하지 않은 trait을 구현할 때

```rs
unsafe {}
unsafe fn name(){}
unsafe trait
unsafe impl
```
