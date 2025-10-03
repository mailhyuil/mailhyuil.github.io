# c++ type

```cpp
/// 문자형 ///
chat c = 'c';           // 문자형 변수 (1바이트)
unsigned char uc = 'c'; // 문자형 변수 (1바이트) (양수만 표현)

string hello = "hello"; // string 변수 char[] 대신 사용 가능 (문자 당 1바이트 + 1바이트 null 문자 \0이 추가됨)
char first = hello[0];  // string의 첫번째 문자 'h'

/// 정수형 ///
short s = 4;            // 정수형 변수 (2바이트)
unsigned short us = 4;  // 정수형 변수 (2바이트) (양수만 표현)

int i = 4;              // 정수형 변수 (4바이트)
unsigned int ui = 4;    // 정수형 변수 (4바이트) (양수만 표현)

long l = 4;             // 정수형 변수 (4바이트)
unsigned long ul = 4;   // 정수형 변수 (4바이트) (양수만 표현)

long long ll = 4;       // 정수형 변수 (8바이트)
unsigned long long ull = 4; // 정수형 변수 (8바이트) (양수만 표현)

/// 실수형 /// unsigned는 사용 불가능
float f = 4.0;          // 실수형 변수 (4바이트)

double d = 4.0;         // 실수형 변수 (8바이트)

long double d = 4.0;    // 실수형 변수 (12바이트)

/// 불린형 ///
bool b = true;          // 불린형 변수 (1바이트)
```
