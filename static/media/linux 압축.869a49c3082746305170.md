# 압축

> 보통 tar.gz로 압축을 많이 함
> tar로 파일을 묶고 gzip으로 다시 압축

## tar

```sh
# tar로 압축
tar -cvf 압축명 압축할폴더

# tar 압축 풀기
tar -xvf 압축파일

# tar.gz로 압축
tar -zcvf 압축명 압축할폴더

# tar.gz 압축 풀기
tar -zxvf 압축파일

-c # 파일을 tar로 묶음
-p # 파일 권한을 저장
-v # 묶거나 파일을 풀 때 과정을 화면으로 출력
-f # 파일 이름을 지정
-C # 경로를 지정
-x # tar 압축을 풂
-z # gzip으로 압축하거나 해제함
```

## gzip

> gunzip 또는 gzip으로 압축을 풀 수 있음

```
gunzip 파일이름.gz
gunzip example.txt.gz

gzip -d 파일이름.gz
```
