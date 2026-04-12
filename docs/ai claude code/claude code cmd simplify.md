# claude code simplify

- git diff (커밋하지 않아야 함) 기준 reuse, code quality, efficiency 에이전트를 병렬로 실행하여 코드를 안정적으로 리팩토링
- reuse agent: 중복로직, 기존 유틸리티로 대체 가능한 코드 등
- code quality agent: 가독성, 구조, 컨벤션, 추상화 문제 등
- efficiency agent: 불필요한 연산, 놓친 동시성 기회, 핫패스 비용, 메모리 누수 등

```sh
/simplify
```
