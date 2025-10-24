# linux base user mode & kernel mode

## user mode

> 사용자가 접근할 수 있는 영역 (e.g. app, terminal)
>
> > syscall을 통해서 kernel mode에 요청

## kernel mode

> 커널에 접근할 수 있는 영역
>
> > 사용자가 접근하면 위험한 내부 시스템을 관리
> >
> > > system call의 요청을 받은 커널이 그 요청에 대한 일을 하고 결과값을 system call의 리턴 값으로 전해준다.

## 예시

```sh
# user mode(terminal)에서 cp 명령어 사용
cp input.txt output.txt
# 내부적으로 syscall.. 을 통해서 copy 후 결과값 반환
```
