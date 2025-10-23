# SEO

> meta 태그를 사용하여 검색엔진최적화를 할 수 있다.
>
> > https를 사용하면 좋다. (구글은 https 프로토콜을 사용한 사이트를 먼저 보여준다.)

```html
<head>
  <meta charset="utf-8" />
  <title>my-page</title>
  <meta
    name="description"
    content="전남 광주에 있는 하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작(개발)해드립니다."
  />
  <!-- 더 이상 사용하지 않음 -->
  <!-- <meta name="keywords" content=""/> -->
  <base href="/" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/png" href="assets/images/favicon.png" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link rel="canonical" href="https://mailhyuil.com" />

  <!-- Opengraph Meta Tags-->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mailhyuil.com" />
  <meta property="og:title" content="my-page" />
  <meta property="og:image" content="https://mailhyuil.com/assets/images/ogimage.png" />
  <meta
    property="og:description"
    content="하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작해드립니다."
  />
  <meta property="og:site_name" content="my-page" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Meta Tags-->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@mailhyuil" />
  <meta name="twitter:title" content="my-page" />
  <meta
    name="twitter:description"
    content="하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작해드립니다."
  />
  <meta name="twitter:image" content="https://mailhyuil.com/assets/images/ogimage.png" />
  <meta name="twitter:image:alt" content="my-page" />
  <meta name="twitter:creator" content="@mailhyuil" />
  <meta name="twitter:site" content="@mailhyuil" />
  <meta name="twitter:label1" content="Written by" />
  <meta name="twitter:data1" content="mailhyuil" />
  <meta name="twitter:label2" content="Est. reading time" />
  <meta name="twitter:data2" content="5 minutes" />
</head>
<body>
  <h1>my-page</h1>
  <p>하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작해드립니다.</p>
</body>
```

## open graph (og)

> Meta에서 개발한 프로토콜로, 페이스북과 트위터에서 사용된다.
>
> > sns에 게시될때 최적화된 데이터를 가지고 갈 수 있도록 설정하는 것
> >
> > > facebook, instagram, kakao, naver.. 등에서 다양하게 사용됨

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:title" content="Content Title" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />
<!-- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

## twitter, facebook, itunes ..

> og를 지원하지만 그와 별개로 자신만의 meta 태그를 가진 서비스들이 존재한다.
>
> > 이 메타태그를 사용하여 특정 서비스에 정보 제공, ui 에 정보 제공 등의 역할을 수행한다.

```html
<meta name="twitter:card" content="summary_large_image" />
...
<meta name="fb:app_id" content="1234567890" />
...
<meta
  name="apple-itunes-app"
  content="app-id=1234567890, affiliate-data=partnerId=1234567, app-argument=https://example.com"
/>
...
```
