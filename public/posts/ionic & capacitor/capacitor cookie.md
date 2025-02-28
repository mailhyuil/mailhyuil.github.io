# capacitor cookie

> 모바일 앱의 Origin은 localhost 또는 file://이다.
>
> localhost 대신 원격 서버를 사용하는 것도 가능하다.
>
> > 특히 WebView를 사용하는 경우 SameSite 정책이 적용되어있어서 localhost일 시 Cookie를 사용할 수 없다.
> >
> > > Cookie 대신 다른 방식을 사용하거나 Cookie를 사용해야한다면 Cookie 관련 라이브러리를 사용해야한다. (CapacitorCookie plugin)

## capacitor.config.json

```json
{
  "plugins": {
    "CapacitorCookies": {
      "enabled": true
    }
  }
}
```
