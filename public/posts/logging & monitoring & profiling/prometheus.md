# prometheus

> 프로메테우스는 시스템, 프로세스의 매트릭스 데이터를 모니터링하는게 주된 목적
>
> > 매트릭스 데이터란, 리소스 사용률, 네트워크 성능, 서비스 성능, 하드웨어 센서 데이터 등을 의미한다.
> >
> > > 이와 다르게 elasticsearch는 애플리케이션 데이터를 수집,분석,저장,분석 등이 목적

## install

```sh
docker run -d -p 9090:9090 prom/prometheus
docker run -d -p 3000:3000 grafana/grafana
```
