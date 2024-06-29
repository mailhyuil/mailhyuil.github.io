# linux base glob pattern

> unix에서 file을 매칭하는데 사용하는 패턴
>
> 파일을 찾는데 특화된 패턴으로 regex와는 사용처가 다르다.
>
> > 비슷한 방식으로 spring에서 사용하는 apache ant style pattern이 있지만 약간의 다른 부분이 있다.

## \*

> 0개 이상의 문자와 매칭 (matches zero or more characters)

```sh
data/ma*.txt # data/math.txt, data/maths.txt ...
```

## \*\*

> 0개 이상의 디렉토리와 파일 매칭 (matches all files / directories)

```sh
logs/**/error.log # logs/error.log, logs/2021/error.log, logs/2022/error.log...
src/**/*.js # src/index.js, src/components/index.js, src/components/header/index.js...
```

## {}

> 중괄호 안의 문자열 중 하나와 매칭

```sh
imgs/*.{png,jpg,jpeg} # imgs/png, imgs/jpg, imgs/jpeg
```

## []

> a-z, A-Z, 0-9 중 하나와 매칭 (matches a character range)

```sh
data/[a-z]*.txt # data/abc.txt, data/def.txt ... # 소문자만 매칭
data/[!a-z]*.txt # data/123.txt, data/!@#.txt ... # 소문자가 아닌 것만 매칭
data/[a-z0-9]*.txt # data/abc.txt, data/123.txt ... # 소문자와 숫자만 매칭
data/[A-Z]*.txt # data/ABC.txt, data/DEF.txt ... # 대문자만 매칭
```

## ()

> 제한된 범위의 문자열과 매칭

```sh
(data|logs)/*.txt # data/abc.txt, logs/def.txt # data 또는 logs로 시작하는 txt 파일
```

## ?

> 1개의 문자와 매칭 (matches single character)

```sh
data/ma??.txt # data/math.txt
```
