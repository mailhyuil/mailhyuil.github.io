# linux shellscript until

## 문법

```sh
until [ condition ]
do
   Statements
done
```

## usage

```sh
#!/bin/bash

a=0
until [ $a -ge 5 ]
do
    a=$(expr $a + 1)
    echo $a
done

# pg_basebackup이 성공해서 exit code가 0이 될 때까지 반복
until pg_basebackup --pgdata=/var/lib/postgresql/data -R --slot=replication_slot --host=postgres_primary --port=5432
do
    echo 'Waiting for primary to connect...'
    sleep 1s
done
echo 'Backup done, starting replica...'
```
