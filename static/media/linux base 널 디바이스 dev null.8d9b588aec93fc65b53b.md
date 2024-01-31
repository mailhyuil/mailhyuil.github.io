# linux base > /dev/null

> /dev/null은 리눅스에서 표준 출력을 버리는 특수 파일이다.
>
> > 로그 파일 처럼 시스템에서 사용하는 파일을 비우고 싶을 때도 사용한다.

```sh
# 표준 출력을 /dev/null로 보내면 출력이 무시된다.
echo "hello world" > /dev/null
# 파일을 삭제하지 않고 비우고 싶을 때
cat /dev/null > some.log
```
