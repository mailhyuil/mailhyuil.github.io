# Redirection

> 표준 스트림을 다른 곳으로 재지정하는 것
>
> > 명령어의 출력을 변경할 수 있다
> >
> > > 만약 출력 경로가 없다면, 터미널로 출력된다

## <

> 리눅스의 "default"
>
> > 파일로부터 입력을 받음
> >
> > > 명령어로 파일을 실행하는 기능

```sh
cat hello.txt
# is the same as ..
cat < hello.txt
```

## >

> 표준 출력 스트림의 도착지점을 파일로 설정
>
> > 결과를 파일에 추가
> >
> > > 파일이 이미 존재하면 덮어쓰기 overwritten

```sh
echo "hello world" > hello.txt
```

## >>

> 파일 맨 뒤에 추가

```sh
echo "hello world 2" >> hello.txt
```

## 2>

> 표준 에러 스트림을 사용
>
> > 파일에 에러 메세지 추가

```sh
ls -l /bin/usr 2> ls-error.txt
```

## 2>&1

> 표준에러를 표준출력으로 redirection 하라는 의미
>
> > 표준에러는 모니터로 출력되기 때문에 파일에 쓰이지 않는다.
> >
> > > 표준에러를 표준출력으로 redirection 하면 파일에 쓰인다.

```sh
명령 2>&1 some.log
```

## | (pipe)

> 서로 다른 프로세스로 작동시키는 방식
>
> > A | B // A의 표준 출력을 B의 표준 입력으로 사용

```sh
ls -l | grep "hello"
```

## 그 외

```sh
명령 >& 파일명 # stdout & stderr 를 파일로 출력
명령 >>& 파일명 # stdout & stderr 를 파일에 덧붙여 출력

명령 >! 파일명 # 파일 존재 여부와 상관없이 stdout 를 파일로 출력
명령 >>! 파일명 # 파일 존재 여부와 상관없이 stdout 를 파일에 덧붙여 출력

명령 >&! 파일명 # 파일 존재 여부와 상관없이 stdout & stderr 를 파일로 출력
명령 >>&! 파일명 # 파일 존재 여부와 상관없이 stdout & stderr 를 파일에 덧붙여 출력


>|  파일명  # 출력을 리다이렉션 할 때 NOCLOBBER 설정을 무시한다
<>  파일명  # 장치 파일(/dev)이면, 표준 출력, 표준 입력 등에 모두 사용한다.
```
