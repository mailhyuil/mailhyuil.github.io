# linux base TTY & PTS & PTY

## TTY (Teletypewriter)

> 일반적인 콘솔(터미널)
>
> > stdin, stdout, stderr에 연결된다.
> >
> > > 여러 TTY의 집합을 TTYs라고 부름

```sh
tty

CTRL + ALT + F1 ~ F6
```

## PTS (Pseudo Terminal Slave)

> "가짜" 터미널이라는 뜻
>
> > **X 윈도우나 SSH, 터미널 에뮬레이터(gnome-terminal, iTerm 등)**에서 열리는 터미널
> >
> > > /dev/pts/0, /dev/pts/1 이런 형식으로 되어 있음
> > >
> > > 보통 우리가 GUI에서 열어 쓰는 터미널은 다 PTS임

## PTY (Pseudo Terminal)

> 외부 원격 접속을 위한 가상 콘솔(터미널)
>
> > PTS의 짝꿍 같은 개념
> >
> > > PTY(Pseudo Terminal Master) ↔ PTS(Pseudo Terminal Slave) 이렇게 두 개가 연결됨
> > >
> > > 프로그램끼리 서로 통신할 수 있게 만들어주는 파이프 같은 역할
> > >
> > > > 예: SSH 서버가 PTY master를 통해 입력 받고, 클라이언트 쪽은 PTS로 응답 받는 식
