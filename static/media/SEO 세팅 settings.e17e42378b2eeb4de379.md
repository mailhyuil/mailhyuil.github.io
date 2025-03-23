# SEO settings

1. sitemap 생성 및 등록
   > sitemap을 생성하고 구글 서치 콘솔에 등록한다.
2. https 사용

3. meta 설정
   > description, keywords 등을 설정한다.
   >
   > open graph protocol을 사용하여 설정한다.

```html
<meta name="title" content="example website" />
<meta name="description" content="..." />
<meta name="keywords" content="keyword1,keyword2,keyword3" />
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="Korean" />

<meta name="og:title" content="Title" />
<meta name="og:description" content="Description" />
<meta name="og:locale" content="KO_KR" />
<meta name="og:type" content="website" />
<meta name="og:url" content="https://example.com" />
<meta name="og:image" content="https://example.com/assets/icons/logo.svg" />
```

7. 캐노니컬 link 설정

```html
<link rel="canonical" href="https://mailhyuil.com/search" />
```

7. semantic tag 사용

   > image alt
   >
   > h1, h2, h3 tag 사용
   >
   > time tag 사용
   >
   > strong tag 사용
   >
   > 등등

8. slug 사용
   > url에 id 뿐만 아니라 slug를 사용하여 검색엔진에 노출되도록 한다.
9. 주기적인 콘텐츠 업데이트
   > published date는 time tag로 감싸서 사용한다.
10. json-ld, schema.org 사용
    > 구조화된 데이터를 제공한다.

```html
<p><time datetime="2021-09-01" pubdate>2021년 9월 1일</time></p>
```

## SEO indexing 방지 설정

1. no indexing 설정
   > 검색엔진에 노출되지 않도록 설정한다.

```html
<meta name="robots" content="noindex, nofollow" />
```

2. robots.txt 설정

```txt
User-agent: *
Disallow: /admin/
```
