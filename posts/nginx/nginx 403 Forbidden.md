# nginx 403 Forbidden

> nginx가 접근하려는 폴더나 파일에 대한 권한이 없을 때 발생하는 에러
>
> > 파일, 폴더를 nginx가 접근할 수 있는 곳에 두거나 권한을 변경해주면 해결

```
# 해결 1
index.html을 ubuntu에 두기
# 해결 2
chmod -R 755 폴더명 또는 파일명
```
