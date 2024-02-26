# capacitor localhost

> CapacitorHttp 사용
>
> > http://10.0.2.2:3000/api/v1 사용

## AndroidManifest.xml

> 안드로이드는 기본으로 https를 사용하기에 아래를 활성화 시켜줘야 http가 가능

```xml
<application
   android:usesCleartextTraffic="true"
>
```
