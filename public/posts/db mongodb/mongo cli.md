# mongo shell

## install

```sh
brew install mongosh
```

## usage

```sh
mongosh
# 생성 및 사용
use mydb
# db 확인
show dbs
# collection 확인
show collections
# 용량 확인
db.stats()
# collection 생성 ## 그냥 insert하면 자동 생성됨
db.createCollection("cat")
# collection 삭제
db.cat.drop()
# document 생성
db.cat.insertOne({name: "hyuil", age: 1})
# document 조회
db.cat.find({name: "hyuil"})
```
