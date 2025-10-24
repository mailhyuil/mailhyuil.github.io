# prisma onDelete & onUpdate

```
Cascade // 같이 삭제
SetNull // 삭제 시 외래키를 null
SetDefault // 삭제 시 @default() 값으로 설정됨

// 밑은 데이터베이스마다 동작이 다름
NoAction // 삭제를 못하게 함 (postgres, mysql)
Restrict // 삭제를 못하게 함 (mysql)
```
