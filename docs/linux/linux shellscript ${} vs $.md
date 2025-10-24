# linux shellscript ${} vs $

## $()

> 명령의 실행 결과로 대체

```sh
echo $(ls)
```

## ${}

> $VAR과 같음

```sh
VAR=123

echo $VAR
echo ${VAR}
```
