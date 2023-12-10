# self

> 함수의 첫번째 인자로 self를 받거나 안 받을 수 있다.

## self 안 받기

> 보통 함수처럼 동작

## self 받기

### &self

> 자기 자신의 struct를 immutable borrow

### &mut self

> setter 혹은, 자신의 값을 수정하는 함수들을 만들 때 사용

### self

> borrow를 하지 않고 함수를 move 해왔습니다. 이 함수가 실행되면 self는 사라집니다.
>
> > 어떤 struct 내부의 값을 사용하여 새로운 값을 만들 때 사용합니다
