# js string split 정규식

```js
// 원래 텍스트
const originalText = "hello {{hi/im/shit}} world";

// 텍스트를 분할하고 중괄호로 묶은 부분을 추출
const parts = originalText.split(/(\{\{.*?\}\})/);

// 결과를 저장할 변수
let result = "";

// 추출한 부분을 반복하며 <p> 요소로 감싸고 결과 문자열에 추가
parts.forEach((part) => {
  if (part.startsWith("{{") && part.endsWith("}}")) {
    // 중괄호로 묶인 부분인 경우
    result += `<p>${part}</p>`;
  } else {
    // 중괄호로 묶이지 않은 경우
    result += part;
  }
});

// 결과를 출력
console.log(result);
```
