# Thread-safe (쓰레드 안전성)

> 여러 쓰레드가 동시에 같은 자원에 접근할 때 생기는 문제
>
> > Thread-safe하다는 것은 여러 쓰레드가 같은 클래스 객체에 접근하더라도 정확하게 동작함을 의미
> >
> > > 단일 쓰레드도 멀티 쓰레드 프로그램의 한 종류라고 볼 수 있기에 Thread safety 문제가 생길 수 있음

## Thread-safe하게 코딩하기

1. 불변 객체, 값 사용하기 (e.g. final)

2. 자원을 애초에 공유하지 않기 (스택 메모리에 자원한정하기)

   > 쓰레드는 각자의 스택 메모리를 갖는다.
   >
   > > 자원을 지역변수(in 스택 메모리)로 만들어 공유하지 않게 한다.
   > >
   > > > 매개변수로 받아서 지역변수에 복사하여 사용

3. 전역 변수는 ThreadLocal 클래스 사용하기
   > 쓰레드마다 제공되는 별도의 내부 저장소
   >
   > > 쓰레드에 알맞은 데이터를 구분해서 꺼내주기 때문에 안전

```
private ThreadLocal<String > nameStore = new ThreadLocal<>();
```

4. 동기화 시키기 synchronized (lock) {}
   > synchronized 키워드를 사용해 lock을 걸어 한 쓰레드가 사용 중일때는 다른 쓰레드가 사용하지 못하게 한다.
   >
   > > 동기화를 지원하는 자료구조를 사용하자

## synchronized

> 임계영역(critical section)과 잠금장치(monitor lock)
>
> > 임계영역 : 다른 스레드가 끼어들지 말아야하는 영역
> >
> > > gIndex를 증가시키고 출력하는 부분은 동시에 실행되어서는 안됨

```java
static int gIndex = 1;
static Object lock = new Object();

private void print() {
    int index = 1;
    for (int i = 0; i < 100; i++) {
        try {
            Thread.sleep(10);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        synchronized (lock) {
            System.out.printf("%d, index : %d, gIndex : %d", Thread.currentThread().getId(), index, gIndex);
            System.out.println();
            index++;
            gIndex++;
        }
    }
}
```
