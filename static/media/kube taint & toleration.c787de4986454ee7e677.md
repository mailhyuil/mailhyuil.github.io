# kube taint & toleration

> Node의 taint (key=value:effect)
>
> Pod의 toleration (key=value:effect)
>
> > Node에 taint가 있으면 그 Node에는 Pod가 스케줄링 되지 않는다
> >
> > 하지만 Pod의 toleration에 taint의 key와 value가 일치하면 스케줄링 될 수 있다.

```sh
k describe node node01 | grep -i taint
# Taints: node-role.kubernetes.io/master:NoSchedule

k taint node node01 key1=value1:NoSchedule
```
