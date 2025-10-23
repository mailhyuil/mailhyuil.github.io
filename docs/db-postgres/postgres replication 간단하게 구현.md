# postgres replication

> primary(master)에서는 쓰기를 담당
>
> > replica(standby)에서는 읽기를 담당

## postgres_primary & postgres_replica -> pg_hba.conf

> 실제 사용할 때는 readonly user를 생성해서 사용하는 것이 좋음

```conf
# 추가
host replication postgres all md5
```

## primary의 데이터를 복제

```sh
mv data_standby data_standby.bak
cp -R data_primary data_standby
```

## postgres_replica -> postgresql.conf

> primary connection의 info를 기입

```conf
primary_conninfo = 'application_name=standby1 host=host.docker.internal port=5432 user=postgres password=postgres'
```

## postgres_primary -> postgresql.conf

> standby server의 info를 기입

```conf
synchronous_standby_names = 'first 1 (standby1)' # 처음 1개가 동기화 되어야 함
synchronous_standby_names = 'first 2 (standby1,standby2,standby3)' # 처음 2개가 동기화 되어야 함
synchronous_standby_names = 'any 1 (standby1,standby2,standby3)' # 아무거나 1개가 동기화 되어야 함
```

## postgres_replica -> standby.signal

> standby.signal 파일 생성

```sh
touch standby.signal
```

## 실행
