# 메모리 관리

> 메모리 누수 : GC가 실행되지 않아서 메모리를 계속 차지하고 있는 현상

## 메모리 누수 방지

1. stack 메모리의 지역변수를 사용
2. heap 메모리의 참조를 해제하라 (null)
3. 시스템 자원은 반환해라 (close)
   > 시스템 자원을 사용하면 메모리를 소모한다. 작업이 끝나면 close()를 호출하여 시스템 자원을 반환해줘야한다.
4. 익명 클래스 사용을 최소화

## GC (Garbage Collection)

## Memory Profiling tools

1. jstat
2. jmap
3. jProfiler
4. yourKit
5. Java VisualVM
6. NetBeans Profiler
