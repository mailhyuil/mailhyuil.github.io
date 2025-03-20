# Garbage Collection (가비지 컬렉션)

## STW (Stop The World)

> GC가 발생하면 GC를 처리하기 위해 JVM이 애플리케이션 실행을 멈추는 것을 말한다.
>
> > e.g. JAVA default GC

## Incremental GC (Concurrent GC)

> GC를 처리하는 동안 애플리케이션을 멈추지 않고 GC를 처리하는 방식이다.
>
> > e.g. G1GC, ZGC, Golang, Nodejs

## Generational GC

> 객체의 수명에 따라 여러 영역으로 나누어 GC를 처리하는 방식이다.
>
> > e.g. G1GC, Nodejs
