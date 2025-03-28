# kube object Deployment Rolling Update

> Rolling update는 기본으로 지원된다
>
> > maxSurge가 높을 수록 빠르게 업데이트 된다.
> >
> > maxUnavailable이 높을 수록 빠르게 업데이트 된다.

```yaml
replicas: 3
progressDeadlineSeconds: 600 # 롤링 업데이트가 10분 안에 끝나지 않으면 롤백한다.
revisionHistoryLimit: 10 # 몇개의 revision까지 기록할 것인지
minReadySeconds: 10 # pod가 준비된 후에 몇초 뒤에 Running 상태로 바뀔지
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 50% # 롤링 업데이트 시 새로 띄울 수 있는 최대 신버전 pod 수 (3의 50% = 1.5 -> 올림 -> 2 -> 3+2=5)
    maxUnavailable: 50% # 롤링 업데이트 시 삭제할 최대 구버전 pod 수 (3의 50% = 1.5 -> 내림 -> 1 -> 3+1=4)
```
