# SEO 세팅 settings

1. sitemap.xml 생성 및 등록
   > sitemap.xml을 생성하고 구글 서치 콘솔, 빙 웹마스터, 네이버 서치어드바이저, 다음 검색등록 에 등록
2. https 사용
3. www 같은 호스트네임을 사용한다면 non-www로 301 redirect 설정 또는 캐노니컬 링크
4. meta 설정
   > title, description 등을 설정한다.
   >
   > open graph protocol을 사용하여 설정한다.

```html
<meta name="title" content="example website" />
<meta name="description" content="..." />
<!-- keywords는 사용하지 않는다. -->
<!-- <meta name="keywords" content="keyword1,keyword2,keyword3" /> -->
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
   > querystring이 있는 URL은 캐노니컬을 사용하여 중복 페이지를 방지한다.
   >
   > id로 구분되는 페이지도 셀프 레퍼런셜 캐노니컬을 사용하여 중복 페이지를 방지한다.

```html
<link rel="canonical" href="https://mailhyuil.com/search" />
```

7. semantic tag 사용

8. slug 사용
   > url에 id 뿐만 아니라 slug를 사용하여 검색엔진에 노출되도록 한다.

```txt
https://example.com/posts/1/hello-world
```

9. 주기적인 콘텐츠 업데이트
   > published date는 time tag로 감싸서 사용한다.

```html
<p><time datetime="2021-09-01" pubdate>2021년 9월 1일</time></p>
```

10. json-ld, schema.org 사용
    > 구조화된 데이터를 제공한다.

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
