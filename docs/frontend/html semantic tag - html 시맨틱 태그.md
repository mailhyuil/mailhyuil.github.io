# html semantic tag - html 시맨틱 태그

> semantic tag 사용 시 크롤러가 더 쉽고 정확하게 페이지를 이해할 수 있다.
>
> > SEO에 도움이 된다.
> >
> > > div, span 태그는 SEO에 도움이 되지 않는다.

```txt
h1 ~ h6 : 제목
p : 문단 (줄바꿈이 되는 문장)
string : 강조 (strong) (줄바꿈이 되지 않는 단어, 문장) * em : 강조 부사 (e.g. 정말!, 진짜!, 매우!... 스크린 리더기가 강조해서 읽어 준다. seo에는 도움이 안 된다.)
a + href : 링크

img + alt : 이미지
figure + figcaption : 이미지 설명 (설명이 필요한 경우)

ul, ol, li : 목록 (리스트)
dl, dt, dd : 정의 목록 (FAQ) (제목, 설명이 있는 경우)

header : 메뉴바, 본문의 헤더 (중복 사용해도 무관)
footer : 푸터, 본문의 푸터 (중복 사용해도 무관)
nav : 내비게이션 (메뉴바)
aside : 사이드바 (본문과 관련된 내용)

main : 본문 (중복 사용하면 안 됨)
article : 게시물
section : 섹션 (중복 사용해도 무관)

time + datetime + pubdate : 날짜
```

## 본문 구조

```html
<main>
  <header>
    <h1>제목</h1>
    <p>부제목</p>
  </header>
  <article>
    <section>
      <h2>섹션 제목</h2>
      <p>본문 내용</p>
    </section>
    <aside>사이드바</aside>
  </article>
  <footer>푸터</footer>
</main>
```
