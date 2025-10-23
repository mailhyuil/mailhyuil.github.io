# linux auth chmod

> 부모 디렉토리의 권한에 x가 있어야 하위 디렉토리를 접근,탐색 가능하다.

```sh
# rwx   rwx    rwx
# [유저][그룹][그 외 유저]
# chmod <mode> <filename>

chmod 777 <filename>
chmod -R 777 <directory>
```
