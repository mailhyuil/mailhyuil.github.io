# linux cmd dd

> 블록 단위로 파일을 변환하거나 복사하는 명령어
>
> > 디스크의 I/O 성능을 테스트할 때 자주 사용된다.

```sh
# bs=블록크기
# cbs=블록크기
# ibs=블록크기
# count=블록수
# conv=변환옵션

# if=입력파일
# of=출력파일

dd if=파일명 of=파일명

# 쓰기 속도 테스트
dd if=/dev/zero of=/tmp/test bs=1M count=1000
# 읽기 속도 테스트
dd if=/tmp/test of=/dev/null bs=1M count=1000
```
