# docker log

> docker는 STDOUT/STDERR(console)에 찍힌 로그를 파일로 저장한다.
>
> > production에서는 --log-driver=none으로 설정하고 별도의 로그 시스템을 사용하는 것이 좋다.

## 로그 확인

```bash
# 전체 로그 확인
docker logs [container]
# 마지막 로그 10줄 확인
docker logs --tail 10 [container]
# 실시간 로그 스트림 확인
docker logs -f [container]
# 로그마다 타임스탬프 표시
docker logs -f -t [container]
```

## 호스트 운영체제의 로그 저장 경로

> cat /var/lib/docker/containers/${CONTAINER_ID}/${CONTAINER_ID}-json.log

## 로그 용량 제한

> 컨테이너 단위로 로그 용량을 제한하는 방법
>
> > 도커 엔진에서 기본 설정으로 제한하는 방법
> >
> > > ---log-driver --log-opt
> > >
> > > > 생성된 log file을 로그 에이전트(filebeat, fluentd, logagent)를 사용해서 로그 시스템에 저장

```bash
docker run -d --log-driver=json-file --log-opt max-size=3m --log-opt max-file=5 nginx
```
