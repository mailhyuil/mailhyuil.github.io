# nodejs module process Signal

> Signal 이벤트가 안찍히면 터미널의 문제일 수 있다. (git bash같은 터미널에서는 안찍힘)
>
> > 프로세스 종료는 SIGINT를 보낸다. (pm2 기준) (SIGTERM으로 대체할 수도 있음)
> >
> > > SIGINT를 받고 1.6s 동안 exit하지 않으면 SIGKILL을 보낸다.

## Signal 종류

```sh
EXIT    : exit() 함수가 호출된 경우

SIGINT  : 인터럽트가 발생한 경우 (Ctrl + C) (ALT + F4)

SIGTERM : 종료를 권고하고 무사히 프로세스를 종료 (kill -15) (kill의 default 값)
SIGKILL : 프로세스 강제 종료 (kill -9)

SIGQUIT
SIGUP
SIGUSR1
SIGUSR2
```

## Signal 후킹

> signal 이벤트를 통해 signal 발생시 작업을 오버라이딩
>
> > 정상적인 종료는 0, 비정상적인 종료는 1을 반환한다.
> >
> > > SIGINT, SIGTERM 등은 기본동작은 process exit 0 로 종료되지만, 시그널 후킹을 사용할 경우 명시적으로 종료시키는 코드를 작성해야 한다.

```js
/// 시그널 후킹 작성
process.on("SIGINT", () => {
  console.log("You've pressed ctrl + c!");

  cleanup().then(() => {
    console.log("정상적으로 종료!");
    process.exit(0);
  });

  setTimeout(() => {
    console.log("정상적으로 종료가 안되네요. 강제 종료!");
    process.exit(1);
  }, 3000);
});
```
