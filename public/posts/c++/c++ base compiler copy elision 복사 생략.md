# c++ base compiler copy elision 복사 생략

```cpp
User user(User("name", 20));
// 일반 생성자만 호출
// 컴파일러가 임시로 만들어진 User("name", 20) 자체를 user로 만들어버림
// 경우에 따라서 복사 생략을 안할 수도 있음
```
