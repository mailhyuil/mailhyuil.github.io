# log-agent fluent-bit tail

```conf
# Fluent Bit Configuration

[SERVICE]
    Flush        1
    Daemon       Off
    Log_Level    info
    Parsers_File parsers.conf

[INPUT]
    Name        tail
    Path        /var/log/*.log
    Tag         varlog.*
    Parser      json
    DB          /var/log/flb_varlog.db
    Mem_Buf_Limit 5MB
    Skip_Long_Lines On
    Refresh_Interval 10

[FILTER]
    Name modify
    Match varlog.*
    Remove_Key source

[OUTPUT]
    Name grafana-loki
    Match varlog.*
    Url ${LOKI_URL}
    Labels {job="fluent-bit"}
    LabelKeys container_name
    BatchWait 1s
    BatchSize 1001024
    LineFormat json
    LogLevel info
```
