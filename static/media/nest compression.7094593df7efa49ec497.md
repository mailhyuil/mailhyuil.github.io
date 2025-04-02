# nest compression

> 트래픽이 많은 웹사이트의 운영 환경에서는 압축 작업을 애플리케이션 서버에서 처리하지 않고
>
> 리버스 프록시(Nginx 같은 것)에서 수행하는 것이 강력하게 권장된다.
>
> > 반드시 nginx에서 처리할 것을 고려

## install

```sh
npm i compression
```

## main.ts

```ts
app.use(compression());
```
