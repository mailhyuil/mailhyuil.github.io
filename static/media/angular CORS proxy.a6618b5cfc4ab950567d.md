# angular CORS proxy

> backend와 origin이 달라서 SOP로 인해 막힐 때 (CORS 우회 방법)
>
> 설정에서 localhost:4200을 허용하고 싶지 않은 경우
>
> > 클라이언트는 요청을 프록시 서버로 보내고 프록시 서버가 다시 서버로 요청을 보냄
> >
> > 서버는 응답을 항상 보내기 때문에 프록시 서버가 받을 수 있다.
> >
> > 프록시 서버는 클라이언트와 같은 origin이므로 프록시가 다시 응답을 건네주면 SOP를 우회할 수 있다.

## /src/proxy.conf.json

> /api로 시작하는 모든 요청을 localhost:3000/api/\* 로 변경
>
> > baseUrl을 사용하면 안된다! 요청은 "/api/\*"로 시작해야한다.
> >
> > env의 baseUrl에 빈문자열 사용

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false // https를 사용하는 경우 true 설정 개발에서는 보통 http를 사용하므로 false
  }
}
// or
{
  "/api": {
    "target": "https://seo-dev.dep.team",
    "secure": true,
    "changeOrigin": true,
    "headers": {
      "Host": "seo-dev.dep.team"
    },
    "logLevel": "debug"
  }
}
```

## project.json / angular.json

```json
{
  "serve": {
    "executor": "@angular-devkit/build-angular:dev-server",
    "configurations": {
      "production": {
        "buildTarget": "client:build:production"
      },
      "development": {
        "buildTarget": "client:build:development"
      },
      "local": {
        "proxyConfig": "apps/client/src/proxy.config.json", // local환경에만 proxy 설정 추가
        "buildTarget": "client:build:local"
      }
    },
    "defaultConfiguration": "local"
  }
}
```
