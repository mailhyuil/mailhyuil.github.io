# log-agent logstash

> fluentd, fluentbit, filebeat로 대체 가능
>
> > log를 필터링, 가공하여 전송하는데 특화되어있다.
> >
> > > 실시간으로 로컬에 저장되는 로그를 elasticsearch로 전송

## install

```sh
docker pull docker.elastic.co/logstash/logstash:8.12.0
docker run --rm -it -v ~/pipeline/:/usr/share/logstash/pipeline/ docker.elastic.co/logstash/logstash:8.12.0
```
