# mongodb Journal (WAL)

> mongodb의 wal과 같은 기능
>
> > 모든 수정사항은 journal에 기록되고, 이를 통해 데이터의 일관성을 보장한다.

```txt
1️⃣ Write 요청이 들어오면, 먼저 메모리에 기록됨.
✔ MongoDB는 데이터 변경을 바로 디스크에 쓰지 않고, 먼저 메모리(Shared Buffer)에서 처리함.

2️⃣ 변경 사항을 Journal 파일(journal/)에 기록함.
✔ MongoDB는 WAL처럼 변경 내용을 Journal에 먼저 기록한 후, 일정 주기마다 데이터 파일에 반영함.
✔ 이 단계에서 크래시가 발생해도 Journal을 이용해 복구 가능함.

3️⃣ 일정 시간이 지나면 Journal 내용을 데이터 파일(data/)로 플러시함.
✔ 기본적으로 100ms마다 Journal의 데이터를 실제 데이터 파일로 반영함.
✔ db.fsyncLock()을 호출하면 강제로 Journal을 Flush할 수도 있음.
```
