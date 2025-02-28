# load testing k6 Latency & Throughput

## Latency(지연시간)

> http_req_duration 을 통해 측정 가능
>
> > http_req_duration : 요청에 대한 응답시간

## Throughput(처리량)

> http_reqs_per_sec (RPS, 초당 요청 수) 을 통해 측정 가능
>
> > http_reqs_per_sec : 초당 요청 수 (http_reqs / duration) (RPS)
> >
> > http_reqs : 총 요청의 수
> >
> > iterations : vus가 실행한 총 요청의 수
