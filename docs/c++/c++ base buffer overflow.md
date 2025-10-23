# c++ base buffer overflow

> 버퍼 오버플로우 === 버퍼 오버런
>
> > c와 c++은 array bounds checking을 하지 않기 때문에 array의 크기를 넘어서면서 메모리를 덮어쓰는 버그가 발생할 수 있다.
> >
> > > string이나 vector를 사용하면 이런 문제를 해결할 수 있다.

```cpp
#include <cstdio>
#include <cstring>
#include <iostream>

const char *PASSWORD_FILE = "banana";

int main()
{
  char input[8];
  char password[8];

  std::sscanf(PASSWORD_FILE, "%s", password);

  std::cout << "Enter password: ";
  std::cin >> input; // 여기서 icecreamicecream을 입력하면 banana가 icecream으로 덮어씌워지면서 비밀번호가 통과된다.

  // Debug prints:
  std::cout << "Address of input: " << &input << "\n";
  std::cout << "Address of password: " << &password << "\n";
  std::cout << "Input: " << input << "\n";
  std::cout << "Password: " << password << "\n";

  if (std::strncmp(password, input, 8) == 0)
    std::cout << "Access granted\n";
  else
    std::cout << "Access denied\n";

  return 0;
}
```
