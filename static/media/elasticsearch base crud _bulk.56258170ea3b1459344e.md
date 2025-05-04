# ELK elasticsearch crud \_bulk

> POST명령으로 여러 명령을 배치로 실행할 수 있다.
>
> > 벌크 동작은 따로따로 수행하는 것 보다 속도가 훨씬 빠르다.
> >
> > > body대신 json 파일을 binary data로 전송해도 된다.

```
POST https://localhost:9200/_bulk
{"index":{"_index":"cats", "_id":"1"}}
{"name":"휴일"}
{"index":{"_index":"cats", "_id":"2"}}
{"name":"까미"}
{"delete":{"_index":"cats", "_id":"2"}}
{"create":{"_index":"cats", "_id":"3"}}
{"name":"설이"}
{"update":{"_index":"cats", "_id":"1"}}
{"doc":{"name":"초코"}}
```
