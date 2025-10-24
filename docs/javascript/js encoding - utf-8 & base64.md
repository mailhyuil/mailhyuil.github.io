# js encoding - utf-8 & base64

> 이미 인코딩된 데이터 -> utf-8 바이너로 데이터로 변환 -> 다시 인코딩

```js
const encoded = Buffer.from(string, "utf-8").toString("base64");
const encoded = Buffer.from(string, "latin1").toString("utf-8");
```

## 그 외 메소드

```js
encodeURIComponent; /// 문자를 UTF-8로 인코딩
encodeURI; /// 완전한 URI를 인코딩
decodeURIComponent; /// encodeURIComponent()에 의해 인코딩된 문자열을 다시 원래의 문자열로 디코딩
decodeURI; /// encodeURI()에 의해 인코딩된 URI를 다시 원래의 URI로 디코딩
encodeBase64; /// btoa ///  Base64로 인코딩
decodeBase64; /// atob ///  Base64로 인코딩된 문자열을 디코딩
escape; /// 주어진 문자열을 ASCII로 인코딩합니다. 이 함수는 일부 특수문자들을 제외하고 대부분의 문자들을 인코딩합니다.
unescape; /// escape()에 의해 인코딩된 문자열을 다시 디코딩하여 원래의 문자열로 변환
```
