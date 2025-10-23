# postgres config write only & read only

## write only

> master 서버에서 write 작업만 수행한다면 write 성능을 최적화

```conf
# WAL 로그를 활성화하여 복제를 지원
wal_level = replica
max_wal_senders = 10
wal_keep_size = 512MB
archive_mode = on
archive_command = 'cp %p /var/lib/postgresql/archive/%f'

# Checkpoint 설정 (쓰기 성능 최적화)
checkpoint_timeout = 10min
checkpoint_completion_target = 0.9

# 트랜잭션 처리 성능 향상
synchronous_commit = off
full_page_writes = off

# Connection 최적화
max_connections = 200
shared_buffers = 4GB
work_mem = 16MB
effective_cache_size = 8GB
```

## read only

```conf
# Hot Standby 모드 활성화 (읽기 전용 복제)
hot_standby = on
max_standby_streaming_delay = 30s
max_standby_archive_delay = 30s

# Primary DB와 연결하여 WAL 로그 동기화
primary_conninfo = 'host=PRIMARY_IP port=5432 user=replica_user password=yourpassword'
recovery_target_timeline = 'latest'

# 복제 성능 최적화
wal_receiver_status_interval = 10s
hot_standby_feedback = on
random_page_cost = 1.1  # 읽기 성능 최적화
effective_cache_size = 16GB
```
