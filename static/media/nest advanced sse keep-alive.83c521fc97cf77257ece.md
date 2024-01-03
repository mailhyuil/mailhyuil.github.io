# sse keep-alive

## server

```js
  @Sse(':macAddress/status-monitor')
  @Auth(Role.ADMIN, Role.SUPER_ADMIN)
  @ApiOperation({
    summary: 'Device 상태 모니터링',
  })
  async statusMonitor(@Res({passthrough:true}) res:Response, @Param('macAddress') macAddress: string) {
    const keepAlive$ = interval(40000);
    const subscription = keepAlive$.subscribe(() => {
      this.deviceService.update$.next('keep-alive');
    });
    res.on('close',()=>{
      subscription.unsubscribe();
      })
    return this.deviceService.update$.asObservable();
  }
```

## client

```js
eventSource.onmessage = async (event) => {
  if (event.data === "keep-alive") return;
  // logic..
};
```
