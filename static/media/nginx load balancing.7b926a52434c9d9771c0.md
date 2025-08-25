# nginx load balancing

> upstream 생성
>
> > proxy_pass을 upstream으로 설정

```conf
upstream backend {
    # 부하 분산 규칙 지정
    random; # random

    server localhost:8080 weight=1; # 파라미터를 줄 수 있다
    server localhost:8081;
}
server {
    server_name  localhost;

    listen       80; # e.g. listen 8080;
    listen  [::]:80;

    location / {
        proxy_pass http://backend;
    }
}
```

## 부하 분산 규칙

```txt
round-robin(디폴트) - 그냥 돌아가면서 분배한다.

random - 그냥 랜덤으로 분배한다.

least_conn - 연결수가 가장 적은 서버를 선택해서 분배, 근데 가중치를 고려함

least_time - 연결수가 가자 적으면서 평균 응답시간이 가장 적은 쪽을 선택해서 분배

# hash와 ip_hash는 sticky session을 구현할때 사용한다.
hash - 해시한 값으로 분배한다 쓰려면 hash <키> 형태로 쓴다. (e.g. hash $remote_addr <- 이는 ip_hash와 같다.)

ip_hash - 아이피로 해싱해서 분배한다.

sticky - 쿠키로 분배한다. (3rd-party 모듈 또는 NGINX Plus 예시)
```

## parameter

```txt
weight - 가중치를 둬서 더많이 가게 한다.

max_conns - 최대 연결 한계를 정한다

max_fails - 최대 실패 한계를 정한다. 최대 실패횟수에 도달하면 서버가 죽은것으로 간주한다.

fail_timeout - 시간을 정한다. 이 시간을 넘어서도 응답하지 않으면 서버가 죽은것으로 간주한다.

backup - 이 서버는 백업서버로 간주하고 다른 메인 서버가 죽었을때 동작한다. load balancing methods가 hash나 random일때는 무의미

down - 표시한 서버는 사용치 않는다.
```
