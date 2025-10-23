# String

> String은 원시타입은 아니지만 원시타입으로 취급한다. = 특별한 객체이다.. 그렇기 때문에 null값을 허용
>
> > String은 한번 객체가 생성되면 해당 값은 변하지 않는다.
> >
> > > String을 객체 취급하게 된다면 같은 값이여도 두개의 객체가 생성된다 (비효율적이다 그래서 String Constant Pool에 저장해서 같은 값이면 참조시킨다.)

## "" 리터럴 VS new String()

> "" 리터럴 : 스택 메모리의 `String Constant Pool` 영역에 저장
>
> > new String() : 힙 메모리에 객체 생성

- 이 처럼 String은 객체를 만들어내기 때문에 비효율적이다.

## String Constant Pool

> 반복적으로 String 객체가 생성되는 것을 어느정도(같은 값일때) 방지하기 위한 메모리 영역
>
> > Heap 내부에 있음

## intern()

> intern() 메소드를 사용하면 힙 영역에 있는 인스턴스를 String Constant Pool 영역으로 이동시킨다.
>
> > String 리터럴을 이용하면 내부적으로 intern() 메소드를 사용한다.
> >
> > > 인터닝을 사용하면 문자열 비교시 equals()보다 속도와 메모리 부분에서 효율적

```
String str1 = new String("ball");
String str2 = new String("ball");
String str3 = "ball";

//main
System.out.println(str1 == str1.intern());    //false
System.out.println(str3 == str1.intern());    //true
```

## String VS StringBuffer VS StringBuilder

### String

> 한번 생성되면 변하지 않음
>
> > 문자열 연산이 발생하면 값이 변하는게 아니라 새로운 객체를 생성 (비효율)
> >
> > > 문자열 연산이 많으면 사용하면 안된다. 짧은 문자열 연산에만 사용

### StringBuffer & StringBuilder

> 문자열 연산이 발생하면 값 자체를 변경

### StringBuffer 와 StringBuilder의 차이

> StringBuffer는 멀티 스레드 환경에서도 동기화를 지원 StringBuilder는 지원 X
>
> > StringBuilder는 동기화를 지원하지 않기 때문에 성능이 더 좋음
