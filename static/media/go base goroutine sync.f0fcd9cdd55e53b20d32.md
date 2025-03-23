# go package sync

> Go에서 동시성(concurrency)을 안전하게 다룰 수 있게 해주는 기본적인 동기화 도구들을 제공
>
> > 멀티 고루틴 환경에서 **데이터 경쟁(race condition)**을 피하기 위해 아주 자주 사용됨

## Mutex

> 읽기/쓰기 관계없이 "한 번에 하나만 접근 가능"한 락
>
> > 단순함, 읽기 작업조차 병렬 처리 안 됨
> >
> > > 동시성이 낮음 (하지만 안전)

```txt
Lock() → 다른 고루틴은 다 막힘
Unlock() → 다음 고루틴 실행 가능
```

## RWMutex

> 읽기와 쓰기를 분리해서 더 높은 동시성 제공
>
> > 읽기 많은 상황에서 성능 ↑
> >
> > > 쓰기 중일 땐 읽기도 못함
> > >
> > > > 잘못 쓰면 데드락 생기기 쉬움 (RLock 안 풀거나, Lock 중복 등)

```txt
RLock() / RUnlock() → 여러 고루틴 동시 읽기 가능

Lock() / Unlock() → 쓰기 시 단독 점유
```

## Once

> 함수가 한번만 호출되도록 보장

```go
var once sync.Once
var instance *Config

func GetConfig() *Config {
	once.Do(func() {
		instance = loadConfig()
	})
	return instance
}
```

## WaitGroup

> 여러 고루틴이 끝날 때까지 대기

```go
for i := 0; i < 5; i++ {
	wg.Add(1) // 🔥 고루틴 실행 전에 반드시 호출
	go func(i int) {
		defer wg.Done() // 🔥 defer로 고루틴 종료 시 반드시 호출
		fmt.Println(i)
	}(i) // 👈 루프 변수 캡쳐도 방지!
}
wg.Wait()

```

## Cond

> 조건 변수

```go
var mu sync.Mutex
var cond = sync.NewCond(&mu)
var ready = false

func worker() {
	mu.Lock()
	for !ready {
		cond.Wait() // 조건 만족 전까지 블록
	}
	fmt.Println("작업 시작!")
	mu.Unlock()
}

func main() {
	go worker()

	time.Sleep(1 * time.Second)
	mu.Lock()
	ready = true
	cond.Signal() // 하나 깨움 (Broadcast()는 모두 깨움)
	mu.Unlock()
}
```

## Map

> 동시성 안전한 맵

```go
var m sync.Map

func main() {
	m.Store("name", "hyuil")
	m.Store("age", 99)

	val, ok := m.Load("name")
	if ok {
		fmt.Println(val)
	}

	m.Range(func(k, v any) bool {
		fmt.Printf("%v: %v\n", k, v)
		return true
	})
}
```

## Pool

> 동시성 안전한 메모리 풀

```go
var bufPool = sync.Pool{
	New: func() any {
		return new(bytes.Buffer)
	},
}

func handler() {
	buf := bufPool.Get().(*bytes.Buffer) // 꺼냄
	buf.Reset()
	defer bufPool.Put(buf) // 반환
}
```
