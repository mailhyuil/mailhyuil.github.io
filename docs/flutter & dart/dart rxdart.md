# dart rxdart

- 기본 dart Stream에 대한 확장으로 제공한다. (메소드가 추가됨)

## RxJS vs RxDart

| 개념       | RxJS            | RxDart                          |
| ---------- | --------------- | ------------------------------- |
| Stream     | `Observable`    | `Stream`                        |
| Hot stream | `Subject`       | `Subject`                       |
| Multicast  | `Subject`       | `Subject`                       |
| 구독       | `subscribe()`   | `listen()`                      |
| 해제       | `unsubscribe()` | `cancel()`                      |
| 연산자     | `pipe()`        | `.map().where().debounceTime()` |
