# nodejs module async_hooks

> 일반적으로 비동기 함수 내에서는 컨텍스트가 덮어씌어지거나 유지되지 않음
>
> > asyncLocalStorage.run내에서 비동기 함수들을 실행 시 asyncLocalStorage.getStore()로 컨텍스트를 유지할 수 있음

## AsyncLocalStorage

> This class creates stores that stay coherent through asynchronous operations.

```js
import { AsyncLocalStorage } from "async_hooks";

const als = new AsyncLocalStorage();
const store = { value: 42 };

als.run(store, () => {
  // 이 안에서 발생하는 모든 비동기 작업은 store를 사용할 수 있음
  als.getStore(); // return store
});
```

## 사용 예시

```txt
✅ 각 요청(Request)마다 고유한 데이터(Context)를 유지해야 할 때
✅ 로그 시스템에 요청 ID를 자동으로 추가하고 싶을 때
✅ 트랜잭션을 관리하고 싶을 때 (Database, Redis, Kafka 등)
✅ APM(성능 모니터링) 및 분산 트레이싱(Distributed Tracing)을 구현할 때
```
