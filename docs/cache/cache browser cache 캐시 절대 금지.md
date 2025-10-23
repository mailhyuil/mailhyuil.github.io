# cache 캐시 절대 금지

> 절대로 캐싱하면 안되는 경우 (은행정보, 카드사, 개인정보 등)
>
> > 통장잔고, 개인정보 같은 유출되면 안되는 응답에는 밑의 헤더를 전부 넣어줘라!

```sh
Cache-Control : no-cache, no-store, must-revalidate
Pragma : no-cache
```
