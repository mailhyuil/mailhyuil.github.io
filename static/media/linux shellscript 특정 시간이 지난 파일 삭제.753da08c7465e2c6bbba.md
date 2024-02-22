# linux shellscript 특정 시간이 지난 파일 삭제

```sh
#!/bin/bash

# 삭제 대상 디렉토리 및 파일 확장자
target_directory="/경로/대상/디렉토리"
file_extension=".확장자"

# 삭제 대상 파일이 생성된 기간 (단위: 분)
# 예를 들어, 30일 전에 생성된 파일을 삭제하려면 30 * 24 * 60
time_threshold=$((30 * 24 * 60))

# 현재 시간 (단위: 분)
current_time=$(date +%s)

# 대상 디렉토리로 이동
cd "$target_directory" || exit 1

# 파일 삭제 함수
delete_old_files() {
  find . -name "*$file_extension" -type f -mmin +$time_threshold -delete;
}

# 파일 삭제 실행
delete_old_files

echo "삭제 완료!"
```

## 30일이 지난 파일 삭제

```sh
#!/bin/sh

find /tmp/ -mtime +30 -delete
```
