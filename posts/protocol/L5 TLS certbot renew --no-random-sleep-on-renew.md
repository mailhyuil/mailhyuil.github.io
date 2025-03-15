# certbot --no-random-sleep-on-renew

> certbot renew는 실행될 때 최대 1시간까지 랜덤한 지연 시간을 가짐.
>
> certbot renew 실행 시 내부적으로 0~60분 사이의 랜덤한 시간 동안 대기 후 갱신을 시작
>
> > --no-random-sleep-on-renew 옵션을 추가하면 즉시 실행 가능

```sh
certbot renew --no-random-sleep-on-renew
```
