# Mutation immutable object vs mutable object

> mutable object = 조립식 컴퓨터
>
> immutable object = 완제품 컴퓨터 (애플 컴퓨터)
>
> > 조립식 컴퓨터는 부품을 바꿔서 커스터마이징이 가능하지만 완제품 컴퓨터는 부품을 바꿀 수 없다.
> >
> > 대신 조립식 컴퓨터는 부품을 바꾸면서 문제가 생길 수 있지만 완제품 컴퓨터는 항상 새로운 것을 구매하므로 문제가 생길 확률이 적다.

## immutable object

### immutable object와 가비지 컬렉터

> GC는 생명주기가 짧은 객체를 빠르게 처리할 수 있다. (불변 객체는 short lived object에 해당한다.)
>
> > immutable object를 사용하면 재할당을 줄일 수 있다.
> >
> > > 재할당을 하는 이유는 이 객체를 변화시킬 수 있기 때문에 방어적으로 복사를 하는것인데 immutable하다면 방어적 복사를 할 필요가 없기 때문이다.
> > >
> > > > 할당이 줄어들면 가비지 컬렉팅하기 쉽다.

### immutable object와 방어적 복사 (defensive copying)

> mutable 객체는 다른 곳에서 변화되는 걸 방지하기 위해 방어적 복사 기법을 사용한다
>
> > 방어적 복사를 남용하면 메모리 누수가 발생할 수 있다.

### immutable object와 caching (memoization)

> immutable object는 안전하게 공유가 가능하기 때문에 caching하기 쉽다.
>
> > mutation으로 인한 오류를 걱정하지 않아도 된다.

### immutable object는 디버깅하기 쉽다

> 값이 바뀜으로서 발생하는 버그를 전부 스킵할 수 있다.
>
> > 값이 바뀌었다는건 새로운 인스턴스가 할당되었다는 것이기 때문에 언제 어디서 변화되었는지 알기 쉽다.
> >
> > constructor에 logging 로직

### immutable object는 변화 감지가 쉽다

> deep check를 하지 않아도 된다.

### immutable object는 충돌 방지하기 쉽다.

### immutable object는 Thread Safe하다.

> 불변하기 때문에 값을 읽는 동안 다른 Thread가 값을 변경할 수가 없음

### immutable object는 값을 검증할 필요가 없다.

> 값이 변하지 않기 때문에 값이 변했는지 검증할 필요가 없다.

### immutable object는 실패 원자성을 보장한다.

> 작업 도중 실패가 발생해도 객체의 상태는 변하지 않는다.
>
> > mutable object를 사용 시 값이 변경된 상태에서 실패가 발생하면 객체의 상태는 변경된 상태로 남아있을 수 있다.

### immutable object는 테스트하기 쉽다.

> 항상 같은 값을 가지고 사이드 이펙트가 없기 때문에 테스트하기 쉽다.

## mutable object

### mutable object는 수정이 가능하다

> 그냥 수정하고 새로운 인스턴스를 만들 필요가 없으므로 메모리 사용율이 적다

### mutable object는 공유될 수 있다.

> 하나의 인스턴스를 공유하면 값이 바뀌면 공유된 값도 변화하므로 메모리 사용율을 아낄 수 있다.
