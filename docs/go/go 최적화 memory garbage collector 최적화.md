# go memory garbage collector 최적화

1. 할당을 줄여라
   > 가능하면 스택을 사용하도록 설계

```go
var buf [4096]byte // 스택에 잡힘 (GC 대상 아님)

buf := make([]byte, 4096) // 힙 할당 (GC 대상)
```

2. 메모리 재사용
   > 반복적으로 생성/삭제되는 객체를 캐싱하면 GC 부담 확 줄어듦
   >
   > > GC는 sync.Pool 객체는 GC 전까지는 안 건드림

```go
var bufPool = sync.Pool{
    New: func() interface{} {
        return make([]byte, 1024)
    },
}

buf := bufPool.Get().([]byte)
// ... 사용하고 나서
bufPool.Put(buf)
```

3. 슬라이스/맵을 재사용
   > 슬라이스를 clear하고 재사용하면 GC 안 끼어듦

```go
s = s[:0] // 기존 cap 유지한 채로 재사용 가능
```

4. 필요없는 참조는 빨리 끊어라

```go
var cache []*BigStruct // ❌ 오래 참조하면 GC 못 치움

cache = nil            // ✅ 참조 끊어주기
```

5. GOGC 튜닝

```sh
GOGC=100 ./app     # 기본값
GOGC=200 ./app     # GC 덜 자주 돌음 → 메모리 더 많이 씀
GOGC=50 ./app      # GC 자주 돌음 → CPU 더 많이 씀
```

6. GC 프로파일링
   > GC가 얼마나 자주 돌고, 얼마나 많은 메모리를 사용했는지 확인 가능

```sh
GODEBUG=gctrace=1 ./app # GC가 발생할 때마다 로그 출력
```

7. 대형 객체는 되도록 피하자
   > 대형 객체는 GC가 느려짐
   >
   > > 16KB 이상인 경우, GC가 더 느려짐
   >
   > > 32KB 이상인 경우, GC가 더더 느려짐
   > >
   > > > 필요하다면 chunk로 나눠서 관리하거나, sync.Pool을 사용
