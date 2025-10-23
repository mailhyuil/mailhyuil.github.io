# angular signal 따닥

```ts
@if(results(); as results){ // 여기서 request 한번 실행

// 이 안에 init 하면서 request를 또 날리거나 options을 변경하면
// request가 두번 발생해버린다.
}
```
