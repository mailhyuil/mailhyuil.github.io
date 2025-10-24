# redis base cluster

## redis.conf

> replication 별로 설정

```conf
port 7000 # 포트번호

cluster-enabled yes # cluster 모드 활성화
cluster-config-file /path/to/redis/redis-cluster/7000/nodes-7000.conf # cluster 정보를 저장할 파일
cluster-node-timeout 5000 # failover 상태로 인식하는 시간 # 5초내에 ping이 오지 않으면 failover

cluster-require-full-coverage yes # cluster 일부가 down되었을 때 전략을 설정
cluster-migration-barrier 1       # master에 연결되어 있어야하는 최소 slave 수
cluster-slave-validity-factor 10  # master가 failover 되었을 때 slave가 master로 인식되는 시간 # 10 * 3초 = 30초

# yes : slave가 없는 master가 다운되면 cluster 전체가 중지
# no : slave가 없는 master가 다운되더라도 cluster는 유지합니다. 다운된 master의 슬롯에서만 에러가 발생합니다.
# 일부 데이터가 유실돼도 괜찮으면 no, 데이터의 정합성이 중요하다면 yes를 선택하면 됩니다.
# no로 설정하더라도 절반 이상의 node가 down 되면 cluster는 중지됩니다.

dir /path/to/redis/redis-cluster/7000 # 데이터 저장 경로
daemonize yes # 백그라운드 실행
appendonly yes # AOF 모드 활성화
#logfile /var/logs/redis/redis.log # 로그파일 경로
#dbfilename dump.rdb # 데이터 파일 이름
```

## 클러스터 생성

```sh
## dir 생성
mkdir 7000 7001 7002
## redos-server
redis-server redis.conf
## cluster 모드로 실행
redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 --cluster-replicas 1
```
