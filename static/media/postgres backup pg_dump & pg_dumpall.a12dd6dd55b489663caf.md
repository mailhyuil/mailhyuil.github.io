# postgres pg_dump & pg_dumpall

> pg_dump => pg_restore, psql로 복구
>
> > pg_dump -Fc => pg_restore로 복구
> >
> > > pg_dumpall => psql로 복구

```sh
# -h : host // default : localhost
# -p : port // default : 5432
# -U : user // default : current linux user

# -d : database
# -t : table
# -n : schema
# -F : format
# c(custom), d(directory), t(tar), p(plain text), h(html)
# c(custom) : .dump
# d(directory) : .sql

# 특정 데이터베이스를 지정하여 백업
pg_dump -d dbname > backup.sql
pg_dump -d dbname -Fc > "backup.dump"

# 전체 데이터베이스를 백업
pg_dumpall > backup.sql
```
