# angular proxy

> backend sop 설정에서 localhost:4200을 허용하고 싶지 않은 경우
>
> > proxy를 통해서 backend와 같은 도메인, 포트로 요청을 보내면 된다.

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
