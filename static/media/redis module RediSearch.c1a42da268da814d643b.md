# redis module RediSearch

> index를 생성 -> 쿼리를 통해 검색

```sh
HSET users#1 name "sb" year 1993 country korea
HSET users#2 name "hana" year 1998 country korea
HSET users#3 name "yw" year 1992 country korea
HSET users#4 name "hyuil" year 2021 country uk

FT.CREATE idx:users ON HASH PREFIX 1 users#
    SCHEMA name TEXT year NUMERIC country TAG

FT.SEARCH idx:users "@name:(sb|hana) @year:[1990 2000] @country:korea"
```
