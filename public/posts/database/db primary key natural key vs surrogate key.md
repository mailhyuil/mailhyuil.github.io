# db primary key natural key vs surrogate key

## natural key

> natural key는 비즈니스적으로 의미가 있는 key를 말합니다. 예를 들어, 유저네임, 주민등록번호, 이메일 주소, 전화번호 등이 있습니다.
>
> > 변경 가능성이 있다면 primary key로 적합하지 않습니다. (surrogate key를 사용해야 합니다.)
> >
> > > 클라이언트에게 노출되는 key는 natural key를 사용해야 합니다.

## surrogate key

> surrogate key는 비즈니스적으로 의미가 없는 key를 말합니다. 예를 들어, auto increment, uuid 등이 있습니다.
