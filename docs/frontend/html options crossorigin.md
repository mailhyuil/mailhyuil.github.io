# html options crossorigin

> link, script, img, 등의 요소에 crossorigin 속성을 사용하여 CORS를 활성화할 수 있다.
>
> > src, href 요청의 CORS를 설정한는 속성

```txt
"" : 빈값을 설정하면 anonymous로 설정된다.

"anonymous" : element의 CORS 요청의 credentials flag가 'same-origin'으로 지정됩니다.
              same-origin이 아닌 경우 credentials를 전송하지 않습니다.

"use-credentials" : element의 CORS 요청의 credentials flag가 'include'로 지정됩니다.
                    (credentials를 전송합니다.)
                    (서버가 withCredentials를 활성화한 경우 클라이언트도 withCredentials를 활성화해야합니다.)
```
