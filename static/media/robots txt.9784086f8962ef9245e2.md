# robots.txt

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
```
