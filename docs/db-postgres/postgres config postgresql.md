# postgres config postgresql

```conf
## Connecting
port                            = 5432
listen_addresses                = '*'
max_connections                 = 100

## Memory
shared_buffers                  = 400MB
work_mem                        = 1MB
maintenance_work_mem            = 1GB

## Disk
fsync                           = on
synchronous_commit              = on
full_page_writes                = on
checkpoint_segments             = 100

## ARCHIVE BACKUP
wal_level                       = replica
archive_mode                    = on
archive_command                 = 'test ! -f /mnt/server/archivedir/%f && cp %p /mnt/server/archivedir/%f'
archive_timeout                 = 1
restore_command = 'cp /mnt/server/archivedir/%f %p'
#recovery_target_time = '2024-01-31 09:07:00 UTC'

## Planner
effective_cache_size            = 18GB
random_page_cost                = 2

## Logging
log_destination                 = 'stderr'
logging_collector               = on
log_filename                    = 'postgres-%Y-%m-%d.log'
log_truncate_on_rotation        = off
log_rotation_age                = 1d
log_rotation_size               = 0
log_min_duration_statement      = 200
log_statement                   = 'ddl'
log_line_prefix                 = '%t %u@%d %p'

## Autovacuum
autovacuum                      = on
autovacuum_vacuum_scale_factor  = 0.1
autovacuum_analyze_scale_factor = 0.3

## Bulk loading only - leave 'on' for everyday use!
#autovacuum                      = off
#fsync                           = off
#full_page_writes                = off
```
