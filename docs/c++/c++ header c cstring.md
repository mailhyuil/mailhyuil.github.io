# c++ header c cstring

> c언어 문자열 관련 함수 제공

```cpp
#include <cstring>

char str1[] = "hello";

// 문자열 길이
int len = strlen(str1); // 5

// 문자열 복사
char str2[6];

strcpy(str2, str1); // str2 = "hello"

// 문자열 비교
int cmp = strcmp(str1, str2); // 0

// 문자열 연결
strcat(str2, " world"); // str2 = "hello world"

// 문자열 검색
char* ptr = strstr(str2, "world"); // ptr = "world"

// 문자열 자르기
char* token = strtok(str2, " "); //

while (token != NULL) {
    cout << token << endl;
    token = strtok(NULL, " ");
}
// hello
// world

// 문자열 초기화
memset(str2, 0, sizeof(str2)); // str2 = ""

// 문자열 복사
memcpy(str2, str1, sizeof(str1)); // str2 = "hello"

// 문자열 비교
int cmp = memcmp(str1, str2, sizeof(str1)); // 0

// 문자열 검색
char* ptr = memchr(str2, 'l', sizeof(str2)); // ptr = "llo"
```
