# linux directory

```txt
bin
sbin
lib
doc
info
man
share

etc
init.d
rc.d

include
src
html
www

dev = device
media
mnt

lock = 잠금, 현재 실행 중일 때, 동일 인스턴스가 생성되지 않도록하는 파일
proc

opt = optional
srv = served
var = 가변 파일 (e.g. log, DB)
```

## usr/local vs opt

```
usr/local = 내가 빌드한 프로그램 다른 스코프에 의존 가능
opt = third party 프로그램 다른 스코프에 의존하지 않음
```
