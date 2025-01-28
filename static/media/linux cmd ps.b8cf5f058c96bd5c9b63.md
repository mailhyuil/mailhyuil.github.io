# linux cmd ps

> 프로세스 관련 명령어

```sh
# 모든 프로세스 출력
ps -ef

# 모든 프로세스 출력 (BSD 스타일)
ps aux

# 특정 프로세스 이름으로 검색
ps -ef | grep process_name

# header와 함께 출력
ps -ef | head -1; ps -ef | grep process_name
```
