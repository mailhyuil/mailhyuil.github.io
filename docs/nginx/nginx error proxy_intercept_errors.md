# nginx error proxy_intercept_errors

> 300이상의 상태코드가 포함된 프록시 응답을 클라이언트로 전달할지 아니면 가로채서 error_page 지시문으로 처리하기 위해 nginx로 리디렉션할지 결정합니다.

```conf
http {
    proxy_intercept_errors on | off;

    server {
        location / {
            proxy_pass http://localhost:8000;
            error_page 502 = @fallback;
        }

        location = @fallback {
            internal;
            root /path/to/fallback;
            index index.html;
        }
    }
}
```
