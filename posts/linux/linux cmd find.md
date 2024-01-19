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
-name
-wholename # "/" 같은 문자 사용 시
```
