# c++ base template variadic template (가변 길이 템플릿)

> typename... 를 사용하여 가변 길이 템플릿을 사용할 수 있다.
>
> > Types... 로 사용한다.

```cpp
template <typename T, typename... Types>
void print(T arg, Types... args) {
  std::cout << arg << ", ";
  print(args...);
}

// Fold expression
template <typename... Ints>
int sum_all(Ints... nums) {
  return (... + nums);
}
```
