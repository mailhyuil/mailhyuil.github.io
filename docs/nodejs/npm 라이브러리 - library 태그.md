# npm 라이브러리 - library 태그

## 태그

```sh
npm publish --tag <태그명>
```

## 태그명 의미

```txt
alpha: 가장 초기 버전, 불안정
beta: alpha보다는 안정적인 베타 버전, 테스트 중
rc (release candidate): 정식 버전 출시 전 최종 출시 후보 버전
stable: 안정적인 버전
latest: 가장 최신 안정 버전
next: 다음 버전, 최신 기능이 포함된 버전

canary: 매일 또는 매 커밋마다 빌드되는 최신 버전
nightly: 매일 밤 자동으로 빌드되는 버전
dev: 개발 버전
experimental: 실험적 기능들이 포함된 버전

lts (Long Term Support): 장기 지원 버전, 안정성이 중요한 프로덕션용
legacy: 구버전 지원용
previous: 이전 메이저 버전

...
```
