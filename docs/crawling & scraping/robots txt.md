# robots txt

> 크롤링 및 스크래핑 허용 여부를 설정하는 파일

```txt
# 모든 페이지 접근 허용
User-agent: *
Allow: /

# 모든 페이지 접근 차단
User-agent: *
Disallow: /

# 모든 페이지 접근 차단 첫번째 페이지만 허용
User-agent: *
Disallow: /
Allow : /$

# 특정 페이지 접근 허용
# 특정 agent만 허용
User-agent: 제어할 로봇의 User-Agent
Allow: /foo/bar/

# 사이트맵 지정
Sitemap:https://www.example.com/sitemap.xml
Sitemap:https://www.example.com/ko/sitemap.xml
Sitemap:https://www.example.com/en/sitemap.xml
```

## example (hyundai.com)

```txt
User-agent: *
Disallow: /kr/ko/login/
Disallow: /kr/ko/member-change/
Disallow: /kr/ko/mypage/
Disallow: /kr/ko/agreements/
Disallow: /kr/ko/agreements.html
Disallow: /kr/ko/personal-information/
Disallow: /kr/ko/personal-information.html
Disallow: /kr/ko/copyright.html
Disallow: /kr/ko/join/
Disallow: /template_en/
Disallow: /template_ar/
Disallow: /worldwide/en/search
Disallow: /worldwide/ko/search
Disallow: /files/kr/ko/membersPoint/
Disallow: /files/kr/

#Disallow: /pa/
# Disallow: /*?*page=

#HMGICS
Disallow:/sg/hmgics/about-us/journey-of-design
Disallow:/sg/hmgics/about-us/design-concept
#IONIQ5
Disallow:/sg/ioniq-5/specs
#Experience
Disallow:/sg/experience/
Disallow:/sg/offline/
#Shop
Disallow:/sg/shop/
#Owners
Disallow:/sg/owners/
#MyPage
Disallow:/sg/mypage/
#Support
Disallow:/sg/support/faq
Disallow:/sg/support/notice
#InternalSearch
Disallow:/sg/search

# Sitemap files
Sitemap:https://www.hyundai.com/sitemap.xml
Sitemap:https://www.hyundai.com/worldwide/en/sitemap.xml
Sitemap:https://www.hyundai.com/worldwide/ko/sitemap.xml
Sitemap:https://www.hyundai.com/kr/ko/sitemap.xml

Sitemap:https://www.hyundai.com/gd/en/sitemap.xml
Sitemap:https://www.hyundai.com/et/en/sitemap.xml
Sitemap:https://www.hyundai.com/ng/en/sitemap.xml
Sitemap:https://www.hyundai.com/ma/fr/sitemap.xml
Sitemap:https://www.hyundai.com/canarias/es/sitemap.xml
Sitemap:https://www.hyundai.com/tr/tr/sitemap.xml
Sitemap:https://www.hyundai.com/kz/ru/sitemap.xml
Sitemap:https://www.hyundai.com/kz/kk/sitemap.xml
Sitemap:https://www.hyundai.com/uz/ru/sitemap.xml
Sitemap:https://www.hyundai.com/hk/en/sitemap.xml
Sitemap:https://www.hyundai.com/hk/zh/sitemap.xml
Sitemap:https://www.hyundai.com/id/en/sitemap.xml
Sitemap:https://www.hyundai.com/id/id/sitemap.xml
Sitemap:https://www.hyundai.com/la/en/sitemap.xml
Sitemap:https://www.hyundai.com/la/lo/sitemap.xml
Sitemap:https://www.hyundai.com/ph/en/sitemap.xml
Sitemap:https://www.hyundai.com/in/en/sitemap.xml

Sitemap:https://www.hyundai.com/lb/ar/sitemap.xml
Sitemap:https://www.hyundai.com/lb/en/sitemap.xml
Sitemap:https://www.hyundai.com/bh/ar/sitemap.xml
Sitemap:https://www.hyundai.com/bh/en/sitemap.xml
Sitemap:https://www.hyundai.com/wallan/ar/sitemap.xml
Sitemap:https://www.hyundai.com/wallan/en/sitemap.xml
Sitemap:https://www.hyundai.com/jo/ar/sitemap.xml
Sitemap:https://www.hyundai.com/jo/en/sitemap.xml
Sitemap:https://www.hyundai.com/kw/ar/sitemap.xml
Sitemap:https://www.hyundai.com/kw/en/sitemap.xml
Sitemap:https://www.hyundai.com/mynaghi/ar/sitemap.xml
Sitemap:https://www.hyundai.com/mynaghi/en/sitemap.xml
Sitemap:https://www.hyundai.com/almajdouie/ar/sitemap.xml
Sitemap:https://www.hyundai.com/almajdouie/en/sitemap.xml

Sitemap:https://www.hyundai.com/pacific/en/sitemap.xml
Sitemap:https://www.hyundai.com/csa/en/sitemap.xml
Sitemap:https://www.hyundai.com/csa/es/sitemap.xml
Sitemap:https://www.hyundai.com/africa/en/sitemap.xml
Sitemap:https://www.hyundai.com/africa/fr/sitemap.xml
Sitemap:https://www.hyundai.com/middle-east/en/sitemap.xml
Sitemap:https://www.hyundai.com/middle-east/ar/sitemap.xml
Sitemap:https://www.hyundai.com/ksa/en/sitemap.xml
Sitemap:https://www.hyundai.com/ksa/ar/sitemap.xml

Sitemap:https://www.hyundai.com/au/en.sitemap.xml
Sitemap:https://www.hyundai.com/jp/sitemap1.xml

Sitemap:https://www.hyundai.com/eu/sitemap.xml
Sitemap:https://www.hyundai.com/cz/sitemap.xml
Sitemap:https://www.hyundai.com/lu/sitemap.xml
Sitemap:https://www.hyundai.com/be/fr/sitemap.xml
Sitemap:https://www.hyundai.com/be/nl/sitemap.xml
Sitemap:https://www.hyundai.com/sg/sitemap.xml
Sitemap:https://www.hyundai.com/ch/de/sitemap.xml
Sitemap:https://www.hyundai.com/ch/fr/sitemap.xml
Sitemap:https://www.hyundai.com/ch/it/sitemap.xml
Sitemap:https://www.hyundai.com/es/es/sitemap.xml
Sitemap:https://www.hyundai.com/it/it/sitemap.xml
Sitemap:https://www.hyundai.com/pl/pl/sitemap.xml
Sitemap:https://www.hyundai.com/no/no/sitemap.xml
Sitemap:https://www.hyundai.com/nl/nl/sitemap.xml
Sitemap:https://www.hyundai.com/sk/sk/sitemap.xml
Sitemap:https://www.hyundai.com/fr/fr/sitemap.xml
Sitemap:https://www.hyundai.com/de/de/sitemap.xml
Sitemap:https://www.hyundai.com/uk/en/sitemap.xml
Sitemap:https://www.hyundai.com/se/sv/sitemap.xml

Sitemap:https://www.hyundai.com/th/en/sitemap.xml
Sitemap:https://www.hyundai.com/th/th/sitemap.xml
```
