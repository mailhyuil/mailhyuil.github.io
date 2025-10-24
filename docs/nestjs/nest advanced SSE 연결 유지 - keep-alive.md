# nest advanced SSE 연결 유지 - keep-alive

## server

```ts
export class SomeController {
  @Sse()
  async statusMonitor(@Res({ passthrough: true }) res: Response) {
    const subscription = interval(40000).subscribe(() => {
      this.someService.update$.next("keep-alive");
    });
    res.on("close", () => {
      subscription.unsubscribe();
    });
    return this.someService.update$.asObservable();
  }
}
```

## client

```ts
eventSource.onmessage = async event => {
  if (event.data === "keep-alive") return;
  // logic..
};
```
