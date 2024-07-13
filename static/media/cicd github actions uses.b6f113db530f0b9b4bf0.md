# cicd github actions uses

> 이미 만들어져 있는 actions를 사용

```yaml
uses: actions/checkout@v2 # 리눅스 환경에 checkout을 해준다. git checkout처럼

uses: actions/setup-node@v2 # nodejs를 설치해준다. with node 14.x버전으로
with:
  node-version: '14.x'

uses: actions/cache@v2 # 캐시를 사용한다. node_modules를 캐시해준다.
```
