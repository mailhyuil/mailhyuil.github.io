# eslint comment

> vscode의 전구 버튼을 누르면 자동 추가 가능

```ts
// 이 줄의 eslint 에러 무시
// eslint-disable-next-line

// 이 줄의 특정 룰만 무시
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// 이 줄 이후 모든 에러 무시
// eslint-disable

// 다시 eslint 체크 시작
// eslint-enable

// 특정 룰만 끄고 다시 켜기
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function doSomething(value: any) {
  // ...
}
```
