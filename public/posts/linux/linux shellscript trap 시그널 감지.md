# linux signal trap

> 특정 시그널을 감지하고 그에 따라 특정 동작을 수행하도록 스크립트를 설정하는 데 사용

## 문법

```sh
# trap rollback EXIT
# trap doSomthing SIGINT
trap <command> <signal>
```

## usage

```sh
#!/bin/bash

# 정리 작업을 위한 함수 정의
cleanup() {
  echo "Cleaning up temporary files..."
  rm -f /tmp/my_temp_file*
}

# EXIT 시그널을 받았을 때 cleanup 함수 실행
trap cleanup EXIT

# 임시 파일 생성
touch /tmp/my_temp_file_1 /tmp/my_temp_file_2

echo "Doing some work..."
sleep 2
```
