# kube HealthCheck livenessProbe

> self-healing을 위한 설정
>
> > Running 중이라도 app이 비정상적으로 동작하고 있을 수 있음 (ex 다른 포트를 바라보고 있을 수 있음)
> >
> > > 주기적으로 app에 접속 (HTTP Request, ssh 접속, 파일 & 프로세스 유무확인 (ls, cat, ps 명령)) 해서 정상적으로 동작하고 있는지 확인하는 설정
> > >
> > > > httpGet, tcpSocket, exec 방식이 있음
> > > >
> > > > 비정상으로 판단되면 kill & restart

```yaml
livenessProbe:
  httpGet: # get 요청을 날려서 200 응답을 받으면 정상으로 판단 500, 404 등의 응답을 받으면 비정상으로 판단
    path: /
    port: 8080
  tcpSocket: # tcp 소켓을 통해 연결이 되면 정상으로 판단
    port: 22
  exec: # 컨테이너 안의 명령어를 실행해서 정상으로 판단
    command:
      - ls
      - /data/file
  periodSeconds: 5 # 5초마다 한번씩 실행
  initialDelaySeconds: 30 # Running 상태가 되고 30초 후 부터 실행
  timeoutSeconds: 10 # 10초 이상 걸리면 비정상으로 판단
  successThreshold: 1 # 1번 성공하면 정상으로 판단
  failureThreshold: 1 # 1번 실패하면 비정상으로 판단
```
