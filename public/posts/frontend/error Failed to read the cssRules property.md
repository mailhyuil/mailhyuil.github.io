# Uncaught DOMException: Failed to read the 'cssRules' property

> chrome에서 stylesheet에서도 cors를 추가함
>
> > crossorigin을 추가해주자

## 확인

```js
document.styleSheets; // 리턴된 배열에 cssRules 에러가 있는 지 확인
```

## 해결

```html
<link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/kopubbatang.css" crossorigin="anonymous" />
```
