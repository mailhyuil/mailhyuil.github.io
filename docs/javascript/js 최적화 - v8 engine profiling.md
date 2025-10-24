# js 최적화 - v8 engine profiling

```sh
node --trace-opt --trace-deopt --trace-inlining myScript.js

# --trace-opt: 언제 TurboFan으로 최적화됐는지 표시
# --trace-deopt: 최적화가 깨진 시점
# --trace-inlining: 함수가 인라인 최적화됐는지 확인
```
