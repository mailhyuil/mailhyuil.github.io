# SEO

> meta 태그를 사용하여 검색엔진최적화를 할 수 있다.
>
> > https를 사용하면 좋다. (구글은 https 프로토콜을 사용한 사이트를 먼저 보여준다.)

```
<head>
    <meta charset="utf-8">
    <title>my-page</title>
    <meta name="description" content="전남 광주에 있는 하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작(개발)해드립니다.">
    <meta name="keywords" content="광주,앱,하이브리드앱,웹,erp,cms,관리자페이지,프로그램,pc프로그램,어플리케이션,제작,홈페이지,웹페이지,웹사이트,개발자,개발,개발회사">
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="assets/images/favicon.png" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="canonical" href="https://lepisode.team">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Opengraph Meta Tags-->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://lepisode.team">
    <meta property="og:title" content="my-page">
    <meta property="og:image" content="https://lepisode.team/assets/images/ogimage.png">
    <meta property="og:description" content="하이브리드 앱 개발 전문 회사, 홈페이지, 반응형 웹, CMS, ERP 등 원하시는 모든 프로그램을 제작해드립니다.">
    <meta property="og:site_name" content="my-page">
    <meta property="og:locale" content="ko_KR">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <meta name="naver-site-verification" content="fd56654d5795d7debd55c5f8140085c78cf4acb8" />

    <!-- Google tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KLKBZ2X986">
    </script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-KLKBZ2X986');
    </script>
</head>

```

## open graph (og)

> sns에 게시될때 최적화된 데이터를 가지고 갈 수 있도록 설정하는 것
>
> > 카카오톡에 웹페이지를 전송할 때 보이는 요약본

```
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<!-- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```
