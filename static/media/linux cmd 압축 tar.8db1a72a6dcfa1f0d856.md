# 압축 tar

> 보통 tar.gz로 압축을 많이 함
>
> > tar로 파일을 묶고(archive) gzip으로 다시 압축(zip)

## tar

```sh
# tar.gz로 압축
# tar -czvf ./test.tar.gz ./image.jpg
tar -czvf <압축명.tar.gz> <압축 할 파일>

# tar.gz 압축 풀기
# tar -xzvf ./test.tar.gz [-C ./]
tar -xzvf <압축명.tar.gz> [-C 압축 풀 경로]

# tar 아카이브 만들기
tar -cvf 압축명.tar 압축할폴더

# tar 아카이브 풀기
tar -xvf 압축명.tar

-c # 파일을 tar로 묶음
-p # 파일 권한을 저장
-v # 묶거나 파일을 풀 때 과정을 화면으로 출력
-f # 파일 이름을 지정
-C # 경로를 지정
-x # tar 압축을 풂
-z # gzip으로 압축하거나 해제함
```
