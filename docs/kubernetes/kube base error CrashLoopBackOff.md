# kube base error CrashLoopBackOff

> command 를 실행하지않음면 오류난다.
>
> 파드는 주로 그 안에서 실행되는 프로세스 또는 애플리케이션이 활성 상태로 유지되는 한 계속 실행됩니다.
>
> 만약 파드 내에서 실행 중인 프로세스가 종료되면 파드도 종료될 것입니다.
>
> > 컨테이너 내에는 실행중인 서버가 있어야한다 안그러면 CrashLoopBackOff 오류가 난다.

```sh
# while문으로 무한 루프를 만들어서 유지시키기
command: ['sh', '-c', 'while true; do sleep 3600; done']
```
