# kubectl annotate & --record

> 실행한 명령을 history에 기록
>
> > --record는 deprecated됨 annotation으로 기록하도록 변경됨

```sh
kubectl annotate pod web description='my frontend'
kubectl annotate -f pod.json description='my frontend'
```
