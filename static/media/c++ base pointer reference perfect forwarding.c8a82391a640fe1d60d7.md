# c++ base pointer reference perfect forwarding

```cpp
template <typename T>
void wrapper(T&& u) {
  g(std::forward<T>(u));
}
```
