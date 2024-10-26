# c++ filesystem

```cpp
#include <iostream>
#include <filesystem>

namespace fs = std::filesystem;

int main(){
    fs::path p("./some_file.txt");

    std::cout << "내 현재 경로 : " << fs::current_path() << std::endl;
    std::cout << "상대 경로 : " << p.relative_path() << std::endl;
    std::cout << "절대 경로 : " << fs::absolute(p) << std::endl;
    std::cout << "공식적인 절대 경로 : " << fs::canonical(p) << std::endl;

    // directory_iterator
    fs::directory_iterator itr(fs::current_path() / "a");
    while (itr != fs::end(itr)) {
        const fs::directory_entry& entry = *itr;
        std::cout << entry.path() << std::endl;
        itr++;
    }
    return 0;
}

```
