# linux cmd find

```sh
find . -name "*검색어*"
find . -name "*.확장자"

find . -name "*.txt" -delete # 검색 후 삭제

find . -type d # 디렉토리만 검색
find . -type f # 파일만 검색
find . -type l # 링크만 검색

find . -size +100M # 100M 이상의 파일 검색

find . -name "*.js" -exec ls -l {} \; # 검색 후 ls -l 실행


find . -type f -exec grep -l '찾을문자열' {} + # 특정 문자가 포함된 파일 찾기


find . -name "test" -type f

# options
-name # 파일 이름으로 검색
-wholename # "/" 같은 문자 사용 시
-type # 파일 타입으로 검색
-mtime # 수정된 시간
-delete # 검색된 파일, 디렉토리 삭제
-size # 파일 크기로 검색
-exec # 검색 후 찾은 파일, 디렉토리에 대해 명령어 실행

# 30일이 지난 파일 삭제
find /dir -mtime +30 -delete
```
