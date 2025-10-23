# c++ header string literal

```cpp
#include <iostream>
#include <string>

int main() {
    auto s = "Hello, World!"; // const char*
    auto ss = "Hello, World!"s; // std::string
    std::wstring wstr = L"hello";  // wchar_t[]
    std::string str = "hello";     // char[]
    std::string str = R"(asdfasdf
        이 안에는
        어떤 것들이 와도
        // 이런것도 되고
        #define hasldfjalskdfj
        \n\n <--- Escape 안해도 됨
    )";

    std::u32string u32str = U"hello"; // char32_t[]
    std::u16string u16str = u"hello"; // char16_t[]
    std::u8string u8str = u8"hello"; // char[]
}
```
