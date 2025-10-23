# c++ class 생성자 member initializer list

> 생성자 괄호 () 뒤에 콜론 :을 표기하고 멤버를 초기화 하는 것
>
> > 대입(assignment)이 아닌 초기화(initialization)
> >
> > > 멤버 변수가 const라면 반드시 초기화 리스트를 사용해야 한다.
> > >
> > > > 디폴트 생성자가 없는 타입이 멤버 데이터는 초기화 리스트를 사용해야 한다.

```cpp
User() : name(name), email(email) {}
```
