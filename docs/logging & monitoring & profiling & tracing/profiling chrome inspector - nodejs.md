# profiling chrome inspector - nodejs

> chrome inspector로 profiling 하기

## run

> --inspect 옵션을 node 뒤에 써줄 것

```sh
node --inspect main.js # 기본 포트 9229
node --inspect=7000 main.js # 포트 7000
node --inspect-brk main.js # 실행 시 execution을 멈추고 디버거를 기다림
```

## chrome

> chrome://inspect 로 접속 후 `Open dedicated DevTools for Node` 클릭
>
> > Target이 잡히지 않으면 localhost:9229를 127.0.0.1:9229로 변경
