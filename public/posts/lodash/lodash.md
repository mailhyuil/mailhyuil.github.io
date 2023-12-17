# lodash

## install

```sh
# npm i lodash
# lodash는 commonjs로 작성되어 있어서 트리 쉐이킹 되지 않는다!
# cherry picking을 사용하거나 (e.g. import isEmpty from 'lodash/isEmpty')
# lodash-es를 사용하자
npm i lodash-es
npm i -D @types/lodash-es
```

## lodash와 Array 함수의 차이점

> lodash는 모든 iterable에 사용가능
>
> > js Array 함수는 Array에만 사용 가능
