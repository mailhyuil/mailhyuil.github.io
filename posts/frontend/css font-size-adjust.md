# css font-size-adjust

> 대체 폰트 사용시 소문자 높이를 일정하게 유지시켜주는 방법
>
> > 크기는 직접 키우고 줄이면서 확인해야함
> >
> > > next font, capsize 등의 라이브러리를 사용하면 더 쉽게 관리할 수 있음

```css
/* 기본 속성 */
font-size-adjust: none;
font-size-adjust: 0.5

/* 전역 속성 */
font-size-adjust: inherit;   /* 상속 */
font-size-adjust: initial;   /* 초기화 */
font-size-adjust: revert;    /* 원래대로 돌리기 */
font-size-adjust: unset;     /* 설정 해제 */

@font-face {
  font-family: "PretendardVariable";
  src: local("PretendardVariable"), url(/font/PretendardVariable.woff2) format("woff2-variations");
  size-adjust: 90%;
}

p {
  font-family: Arial, sans-serif;
  font-size-adjust: 0.5;
}
```
