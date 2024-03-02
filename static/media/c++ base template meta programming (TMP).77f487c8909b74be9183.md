# c++ generic template typename

```cpp
#include <iostream>

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
```
