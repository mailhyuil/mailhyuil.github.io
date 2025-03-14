# docker logging drivers

## json-file (default)

> stdout, stderr를 json 형식으로 파일에 저장
>
> > 위치: /var/lib/docker/containers/${CONTAINER_ID}/${CONTAINER_ID}-json.log

## none

> logging을 하지 않음

## syslog

> syslog 서버로 전송
>
> > syslog daemon 확인 : `ps -ef | grep syslog`

## journald

> journald로 전송
>
> > journald 확인 : `journalctl`

## gelf

> Graylog Extended Log Format

## fluentd

> fluentd로 전송

## awslogs

> AWS CloudWatch Logs
