# c++ auto vs decltype

## auto

```cpp
const int i = 4;
auto j = i;         // int j = i;
```

## decltype

```cpp
const int i = 4;
decltype(i) k = i;  // const int k = i;
```
