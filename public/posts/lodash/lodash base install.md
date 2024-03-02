# lodash

## install

```sh
npm i lodash
npm i -D @types/lodash
###### 주의 ######
# lodash는 commonjs로 작성되어 있어서 트리 쉐이킹 되지 않는다!
# cherry picking을 사용하거나 (e.g. import isEmpty from 'lodash/isEmpty')

# lodash-es를 사용하자
npm i lodash-es
npm i -D @types/lodash-es

# 특정 함수만 사용하고 싶다면
npm i lodash.isempty
npm i lodash.debounce
```
