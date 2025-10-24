# redis base config

> redis.conf 파일이 없다면 기본 설정으로 실행됩니다.
>
> > redis.conf 파일을 생성해서 설정을 변경

## usage

```sh
redis-server /path/to/redis.conf
```

## redis.conf

```conf
port 7000 # 포트번호
daemonize yes # 백그라운드 실행
logfile /path/to/logfile/filename # 로그파일 경로
cluster-enabled yes # cluster 모드 활성화
cluster-config-file nodes.conf # cluster 정보를 저장할 파일
cluster-node-timeout 3000 # failover 상태로 인식하는 시간 # 3초내에 ping이 오지 않으면 failover
cluster-slave-validity-factor 10 # master가 failover 되었을 때 slave가 master로 인식되는 시간 # 10 * 3초 = 30초
cluster-migration-barrier 1 # master에 연결되어 있어야하는 최소 slave 수
cluster-require-full-coverage yes # cluster 일부가 down되었을 때 전략을 설정
# yes : slave가 없는 master가 다운되면 cluster 전체가 중지
# no : slave가 없는 master가 다운되더라도 cluster는 유지합니다. 다운된 master의 슬롯에서만 에러가 발생합니다.
# 일부 데이터가 유실돼도 괜찮으면 no, 데이터의 정합성이 중요하다면 yes를 선택하면 됩니다.
# no로 설정하더라도 절반 이상의 node가 down 되면 cluster는 중지됩니다.
appendonly yes # AOF 모드 활성화
dir /path/to/7000 # 데이터 저장 경로
dbfilename dump.rdb # 데이터 파일 이름
```
