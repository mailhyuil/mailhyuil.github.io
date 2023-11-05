# linux grep

## 옵션

```sh
-v 제외하기
-i 대소문자 구분 안함
-w 단어 단위로 찾기
-e 정규식 사용 / 여러 개의 검색어 사용 (grep -i -e labels -e port)

-A 검색어 밑으로 10줄
-B 검색어 위로 10줄
-C 검색어 위아래로 10줄
```

## 제외하기

```sh
# -v: invert match
grep -v NAME
```
