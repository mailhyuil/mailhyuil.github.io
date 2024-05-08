# linux cut

> cut out selected portions of each line of a file

## 옵션

```sh
-b	지정된 바이트(byte)를 출력하는 옵션 입니다.
-c	지정된 문자를 출력하는 옵션 입니다.
-d	필드 구분자를 설정하는 옵션 입니다.
-f	지정된 필드를 출력하는 옵션 입니다.
-s	필드 구분자를 포함하지 않는 행을 출력하는 옵션 입니다.
```

## usage

```sh
cat file.txt | cut -d' ' -f1
```
