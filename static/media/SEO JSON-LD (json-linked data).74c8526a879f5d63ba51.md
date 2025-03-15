# SEO JSON-LD (json-linked data)

> 구조화된 데이터를 제공하는 방법
>
> > (json-ld generator)[https://www.google.com/webmasters/markup-helper]

```html
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    "author": "Jane Doe",
    "contentLocation": "Puerto Vallarta, Mexico",
    "contentUrl": "mexico-beach.jpg",
    "datePublished": "2008-01-25",
    "description": "I took this picture while on vacation last year.",
    "name": "Beach in Mexico"
  }
</script>
```

## eg.1 Instagram

```html
<!--
    @context: 스키마 정의 URL입니다. 여기서는 https://schema.org를 사용합니다.
    @type: JSON-LD 유형으로, 개인이나 비즈니스 정보라면 Person 또는 Organization를 사용할 수 있습니다.
    name: 이름이나 비즈니스 이름입니다.
    url: 웹사이트 URL입니다.
    sameAs: 소셜 미디어 또는 관련 링크를 나열하는 배열입니다. Instagram 프로필 링크를 포함합니다.
-->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name or Business Name",
    "url": "https://yourwebsite.com",
    "sameAs": ["https://www.instagram.com/yourinstagramhandle/"]
  }
</script>
```
