# Graceful Shutdown

> hard shutdown의 반대 개념
>
> > 작업을 정상적으로 종료시키는 것
> >
> > > (e.g. buffer에 나은 로그를 flush하는 작업, consumer의 경우 consume을 중단하고 남은 메시지를 처리하는 작업 등)
> > >
> > > > signal -> signal catching -> cleanup logic -> wait for cleanup -> exit

## Hard Shutdown

> 종료 시그널과 함께 모든 작업을 종료시키는 것
>
> > (e.g. 컴퓨터의 전원을 강제로 끄는 것)
> >
> > > SIGKILL // kill -9

## Graceful Shutdown

> 하고 있던 작업을 적절히 마무리 후 정상적으로 종료시키는 것
>
> > (e.g. http 서버의 경우 처리 중인 요청을 모두 처리한 후 종료)
> >
> > > SIGINT, SIGTERM // kill -2, kill -15
> > >
> > > > 두 시그널은 catch를 하여 작업을 수행 후 종료시키는 것이 가능하다.

## 구현

> SIGINT, SIGTERM 시그널을 받으면 작업을 종료시키는 코드를 작성한다.
>
> > SIGINT, SIGTERM 등은 기본으로 process exit 0 로 종료되지만, 시그널 후킹을 사용할 경우 명시적으로 종료시키는 코드를 작성해야 한다.
> >
> > > Signal 이벤트가 안찍히면 터미널의 문제일 수 있다. (git bash같은 터미널에서는 안찍힘)

```js
// 시그널 후킹
process.on("SIGINT", () => {
  //  작업 종료
  process.exit(0);
});
process.on("SIGTERM", () => {
  //  작업 종료
  process.exit(0);
});
```
