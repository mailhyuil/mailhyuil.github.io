# linux cmd shred

> 파일을 안전하게 삭제
>
> > 파일을 덮어쓰거나, 랜덤한 데이터로 덮어쓰거나, 파일을 삭제하기 전에 여러 번 덮어쓰는 등의 방법으로 파일을 안전하게 삭제
> >
> > > 절대로 복구할 수 없음

```sh
# -n 몇 번 덮어쓸지
# -u 삭제 후 파일을 unlink
# -z 랜덤한 데이터로 덮어쓰기

shred -u -z -n 10 /path/to/file

# wipe도 shred와 비슷한 기능을 제공 (없으면 설치)
wipe -rfiv /path/to/file
```
