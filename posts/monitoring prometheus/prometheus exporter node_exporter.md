# prometheus exporter node_exporter

> linux 머신의 상태를 prometheus metric으로 변환하여 제공하는 프로그램
>
> > kernel과 hardware 정보를 제공한다. (cpu, memory, disk space and io, network bandwidth등)
> >
> > > window의 경우 wmi_exporter를 사용한다.

## install

```sh
curl -O https://github.com/prometheus/node_exporter/releases/download/v1.8.0/node_exporter-1.8.0.linux-amd64.tar.gz
tar -zxf node_exporter-1.8.0.linux-amd64.tar.gz
cd node_exporter-1.8.0.linux-amd64
./node_exporter # port 9100 > localhost:9100/metrics로 확인
```
