# c++ header thread

> join이나 detach 되지 않는 쓰레드들의 소멸자가 호출된다면 예외를 발생시킨다.

```cpp
#include <iostream>
#include <thread>
using std::thread;

void func1() {
  for (int i = 0; i < 10; i++) {
    std::cout << "쓰레드 1 작동중! \n";
  }
}

void func2() {
  for (int i = 0; i < 10; i++) {
    std::cout << "쓰레드 2 작동중! \n";
  }
}

void func3() {
  for (int i = 0; i < 10; i++) {
    std::cout << "쓰레드 3 작동중! \n";
  }
}

int main() {
  thread t1(func1);
  thread t2(func2);
  thread t3(func3);

  t1.detach(); // background 로 실행 -d와 같은 것
  t2.detach();
  t3.detach();

  t1.join() // 쓰레드 종료 및 리턴
  t2.join()
  t3.join()

  std::cout << "메인 함수 종료 \n";
  return 0;
}
```
