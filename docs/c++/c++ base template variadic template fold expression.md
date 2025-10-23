# c++ base template variadic template fold expression

```cpp
// Fold expression
template <typename... Ints>
int sum_all(Ints... nums) {
  return (... + nums);
}

(... + nums);
// ==
((((1 + 4) + 2) + 3) + 10);
```
