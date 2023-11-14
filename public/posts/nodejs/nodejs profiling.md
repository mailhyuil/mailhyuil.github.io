# nodejs profiling

```sh
node --prof app.js #  isolate-0x682b200-15100-v8.log 생성
node --prof-process isolate-0xnnnnn-v8.log > processed.txt # txt 파일로
node --prof-process --preprocess -j isolate*.log | flamebearer # flame chart로
```

## flamebearer

> flame graph 로 볼 수 있는 라이브러리

## install

```sh
npm i -g flamebearer
node --prof app.js
node --prof-process --preprocess -j isolate*.log | flamebearer
```
