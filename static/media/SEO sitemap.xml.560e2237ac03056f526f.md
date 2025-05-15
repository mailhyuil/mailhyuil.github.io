# SEO sitemap

> 웹사이트에 있는 모든 중요한 URL 목록을 담은 파일
>
> > 검색 엔진(구글, 빙, 네이버 등)에게 **"내 사이트에 이런 페이지들이 있으니 크롤링해줘"**라고 알려주는 역할
> >
> > 즉 크롤링봇이 더 효율적이고 빠르게 웹사이트를 탐색할 수 있도록 돕는 역할
> >
> > > 구글 서치 콘솔, 빙 웹마스터, 네이버 서치어드바이저, 다음 검색등록 에 등록

## sitemap.xml

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://example.com/products/123</loc>
    <lastmod>2025-05-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    </url>
</urlset>
```

## sitemap ping

> 새로운 페이지가 추가되거나 기존 페이지가 변경되었을 때 검색엔진에 알림

```sh
curl "https://www.google.com/ping?sitemap=https://yourdomain.com/sitemap.xml"
```
