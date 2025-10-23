# prometheus architecture

## 구조

> retrieval : 데이터를 수집 (jobs/exporter가 target으로부터 수집한 데이터를 pull)
>
> > storage : 수집된 데이터를 저장하는 공간 (grafana 등이 접근하여 데이터를 시각화)
> >
> > > http_server : grafana등의 서비스가 저장된 데이터를 얻기위해 접근하는 서버
> > >
> > > > push gateway: prometheus는 기본적으로 pull 방식으로 데이터를 수집하지만, 짧은 시간동안만 존재하는 job들은 push gateway를 통해 데이터를 전달한다.

```sh
short-lived jobs
      |
 push gateway                                      alertmanager
      |                                                  |
      |---> [retrieval | storage | http_server] <--------|
      |                | HDD/SSD |                       |
jobs/exporter                                      grafana / prometheus web ui / client
```
