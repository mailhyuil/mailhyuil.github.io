# capacitor http

> browser api fetch를 패치하여 native 네트워크 요청 기능을 제공한다.
>
> > cookie를 관리할 수 있게된다.
> >
> > file download, upload 등의 기능을 제공한다.

## capacitor.config.json

```json
{
  "plugins": {
    "CapacitorHttp": {
      "url": "http://localhost:3000",
      "timeout": 5000
    }
  }
}
```
