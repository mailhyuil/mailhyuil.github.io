# c++ generic template class

```cpp
// <class myType>는 사용하지 말것
// template <class myType>
// myType GetMax (myType a, myType b) {
//   return (a > b ? a : b);
// }

template <typename myType>
myType GetMax (myType a, myType b) {
  return (a > b ? a : b);
}

```
