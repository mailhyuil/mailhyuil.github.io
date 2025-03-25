# css @import vs link

> @import를 사용 시 브라우저는 병렬로 다운로드하지 못한다.
>
> (@import로 불러드린 css를 다운로드 하기 위해서는 @import가 쓰인 css를 먼저 다운로드 해야하기 때문에)
>
> > html link를 사용 시 html을 파싱하면서 병렬로 다운로드한다.

```txt
# 금지
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

# 권장
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap">
```
