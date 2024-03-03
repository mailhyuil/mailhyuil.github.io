# c++ generic template class

```cpp
// <class myType>는 사용하지 말것
// template <class myType>
// myType GetMax (myType a, myType b) {
//   return (a > b ? a : b);
// }

template <typename T>
void swap(T &x, T &y) {
  T tmp = x;
  x = y;
  y = tmp;
}

template <typename T>
T const &min(T const &x, T const &y) {
  return (x >= y) ? y : x;
}

template <typename T>
T const &max(T const &x, T const &y) {
  return (x > y) ? x : y;
}

template <typename T, typename U>
T const &min(T const &t, U const &u) {
  return (t >= u) ? u : t;
}

template <>
```
