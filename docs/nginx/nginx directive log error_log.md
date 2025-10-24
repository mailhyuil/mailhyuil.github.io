# nginx directive log error_log

## 에러 로그 레벨

```sh
info - 정보
notice - 정상
warn - 경고
error - 프로세스 처리 에러
crit - 프로새스에 영향을 주는 오류
alert - 프로새스에 심각한 영향을 주는 오류
emerg 서비스 불가 수준 오류 - 설정, syntax등이 잘못된 경우
debug 디버그 정보
```

### usage

```sh
error_log <에러로그 경로> <에러로그 레벨>
# error_log /var/log/nginx/error.log debug;
```
