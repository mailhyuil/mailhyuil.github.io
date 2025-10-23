# nest throttling & rate-limiting proxy 사용 시

> proxy 서버를 사용할 경우 proxy ip가 아닌 origin ip를 추출하여 사용
>
> > proxy ip는 제외하고 origin ip만 rate limiting을 적용
> >
> > > proxy 서버의 request header에 `X-Forwarded-For`를 사용하여 origin ip를 추출해야 함

## 방법1. trust proxy true

### nginx x-forwarded-for

```conf
location /api/v1/ {
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_pass http://server:3000;
}
```

### main.ts trust proxy

```ts
app.set("trust proxy", true);
```

## 방법2. custom guard

> getTracker를 override하여 특정 ip만 rate limiting 적용

### proxy guard

```ts
@Injectable()
export class ThrottlerBehindProxyGuard extends ThrottlerGuard {
  protected getTracker(req: Record<string, any>): Promise<string> {
    const originIp = req.ips.length ? req.ips[0] : req.ip;
    return originIp; // individualize IP extraction to meet your own needs
  }
}
```
