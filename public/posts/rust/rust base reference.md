# 참조

> 값의 소유권을 넘기는 대신 개체에 대한 참조자(reference)를 인자로 사용
>
> > & 를 변수 앞에 붙여 인스턴스의 참조값을 전달 할 수 있다.
> >
> > > 참조한 변수는 clone해야 사용 가능하다.

## 슬라이스 타입

> 컬렉션의 요소를 참조

```rs
&str = String이라는 컬렉션의 요소를 참조하는 슬라이스 타입
&vec
```

## 직접참조 vs 간접참조

### 간접참조

> 변수 앞에 역참조 연산자 \* 를 사용하는 것

### 직접참조

> 메모리 주소를 상수로써 코드에 직접 명시하여 접근하는 방법이다.
>
> > 빠르다
