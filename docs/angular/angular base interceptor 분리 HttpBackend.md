# angular base interceptor 분리 HttpBackend

> 새로운 HttpClient 생성하면 메인 interceptor를 타지 않는다.

```ts
const httpBackend = inject(HttpBackend);
const http = new HttpClient(httpBackend);
```
