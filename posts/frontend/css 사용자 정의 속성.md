# css 사용자 정의 속성

> 스타일을 변수화하여 사용할 수 있다.
>
> > -- prefix를 사용하여 :root에 정의

```css
:root {
  --main-color: #3498db;
  --padding: 10px;
}

body {
  background-color: var(--main-color);
  padding: var(--padding);
}
```
