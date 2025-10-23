# Lambda layer

> layer에 등록된 파일은 /opt 경로에 마운트됨
>
> > lambda 함수는 /var/task/ 경로에 위치
> >
> > > lambda 함수는 /var/task/node_modules/를 먼저 탐색하고, /opt/node_modules/를 탐색함

## layer 이름 규칙

```txt
Node.js 모듈 = nodejs
Python 모듈 = python
binary 파일 = bin
library 파일 = lib
```
