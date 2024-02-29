# c++ class 생성자 & 소멸자

```cpp
class MyClass {
public:
    // 기본 생성자 (매개변수가 없는 생성자)
    MyClass() {}

    // 매개변수가 있는 생성자
    MyClass(int x, double y) {}

    // 소멸자 (클래스가 소멸될 때 호출됨)
    ~MyClass() {}
int main(){
  MyClass myClass1; // 기본 생성자 호출
  MyClass myClass2(1, 1); // 매개변수 생성자 호출
}
```
