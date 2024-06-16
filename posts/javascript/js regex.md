# js regex

## 리터럴

> // 로 생성

```js
/^\/posts\/([a-zA-Z0-9-_]+)$/;
```

## 메소드

```js
/^\/posts\/([a-zA-Z0-9-_]+)$/.test(text) // 일치하는게 있는 지 boolean값 리턴
/^\/posts\/([a-zA-Z0-9-_]+)$/.exec(text) // 일치 정보를 array로 리턴
```

## replace

> 문자열 치환

```js
replace; // 첫번째로 발견한 문자열만 치환
string.replace("문자열 or /정규식/", "changed문자열");

string.replace(/\s/g, " "); // 공백을 전부 바꾸기
```
