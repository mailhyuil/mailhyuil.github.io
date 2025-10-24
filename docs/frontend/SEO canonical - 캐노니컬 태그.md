# SEO 캐노니컬 태그 (canonical)

> url 주소가 다양할 수 있는 경우
>
> e.g. (https://mailhyuil.com/search, https://mailhyuil.com/search?q=mailhyuil)
>
> > 만약 캐노니컬 태그를 적용하지 않을 경우, 검색엔진은 해당 URL을 새로운 uRL로 판단하여 표준 URL에 대한 랭킹이 올라가지 않는다.

```html
https://mailhyuil.com/search?q=mailhyuil

<link rel="canonical" href="https://mailhyuil.com/search" />
```

## Self-referential canonical

> /products/:id 같은 URL은 사용자가 선택한 표준이 없는 중복 페이지로 인식된다
>
> > 이 경우 self-referential canonical을 사용하여 중복 페이지를 방지할 수 있다.

```html
<link rel="canonical" href="https://mailhyuil.com/products/101" />
```
