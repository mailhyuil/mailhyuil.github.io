# kube HealthCheck readinessProbe

> 건강하지 않은 컨테이너에게 트래픽이 가지 않도록 차단하는 것 (ready 된 상태인지 확인하는 것)
>
> > 앱이 시작되고 초기화 또는 준비 작업을 수행하는 동안(앱이 트래픽을 처리하지 못하는 동안)은 트래픽을 라우팅하지 못하도록
> >
> > > probe에 실패하면 pod가 준비되지 않은 것으로 간주되고 pod는 트래픽을 받지 않는다. (엔드포인트가 생기지 않는다)
> > >
> > > > livenessProbe는 pod를 삭제했다가 다시 생성하지만, readnessProbe는 엔드포인트를 제거하고 생성하는 것

```yaml
readinessProbe:
  exec:
    command:
      - ls
      - /urs/share/nginx/html/data.html
  periodSeconds: 10 # 10초마다 한번씩 실행
  initialDelaySeconds: 30 # Running 상태가 되고 30초 후 부터 실행
  timeoutSeconds: 10 # 10초 이상 걸리면 비정상으로 판단
  successThreshold: 1 # 1번 성공하면 정상으로 판단
  failureThreshold: 1 # 1번 실패하면 비정상으로 판단
```
