# c++ memory new & delete

> c++에 도입된 동적할당과 해제
>
> > new를 사용하면 객체를 동적으로 생성하면서와 동시에 자동으로 생성자도 호출해준다
> >
> > > new로 할당한 메모리만 delete로 해제할 수 있다.

```cpp
#include <iostream>

using namespace std;

class User {
    private:
        string username;
        string password;
    public:
        User(string username, string password){
            this->username = username;
            this->password = password;
        }
        ~User(){
            cout << "User object destroyed" << endl;
        }
        void say(){
            cout << "Hello, " << this->username << endl;
        }
};

int main(){
    User* users[100];
    users[0] = new User("John", "1234"); // 힙에 User 인스턴스를 할당하면서 그 주소를 리턴한다.
    users[1] = new User("Hyuil", "1234");
    users[0]->say();
    users[1]->say();
    delete users[0];
    delete users[1];
    return 0;
}
```
