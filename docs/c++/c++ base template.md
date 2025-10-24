# c++ base template

> c++에서 제네릭을 구현하는 방법
>
> > 컴파일 시간에 타입이 결정된다 (typescript는 런타임에 결정된다)
> >
> > > `<class myType>`는 사용하지 말것 (c++11부터는 사용하지 않는 것이 좋다)

```cpp
// 하나의 타입만 받을 수 있는 함수
template <typename T>
T const &min(T const &x, T const &y) {
  return (x >= y) ? y : x;
}

// 템플릿 특수화 : T가 char인 경우에는 이렇게 처리해라
template <>
char const &min(char const &x, char const &y) {
  return "type char is not supported";
}

// 여러 타입을 받을 수 있는 클래스
template <typename T, typename U>
class myClass {
  T x;
  U y;
  // ...
};

// 가변 길이 템플릿
template <typename T, typename... Types>
void print(T arg, Types... args) {
  std::cout << arg << ", ";
  print(args...);
}

// 가변 길이 템플릿 Fold expression
template <typename... Ints>
int sum_all(Ints... nums) {
  return (... + nums);
}
```
