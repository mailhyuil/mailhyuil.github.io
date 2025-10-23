# angular SSG (static site generation) (pre-rendering)

> Time to First Byte (TTFB)를 줄이기 위해 사용
>
> > 앱 build 시 미리 생성된 html을 서버에 저장해두고, 요청이 들어오면 저장된 html을 바로 전달
> >
> > > 렌더링에 필요한 데이터는 전부 서버에서 가져오기 때문에, 렌더링에 필요한 데이터를 가져오는 시간이 필요 없음

## install

```sh
ng add @angular/ssr
# ssr 설정이 된 후 build 시 static page가 생성됨
```

## angular.json

> discoverRoutes를 true로하면 angular route 내의 모든 route를 ssg한다.
>
> > 기본이 true기 때문에 항상 false로 설정해주자

```json
{
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:application",
      "options": {
        "prerender": {
          "discoverRoutes": false, /// default: true /// routes에 명시된 route만 prerendering
          "routesFile": "routes.txt" /// default: routes.txt /// parameterized route를 prerendering 하기 위해 routes.txt에 명시
        }
      }
    }
  }
}
```

## routes.txt

> 특정 parameterized URLs 을 prerendering 하고 싶을 때 사용 (e.g. /products/1, /products/555)
>
> > > routes.txt를 사용하지 않을 시 default로 모든 route가 prerendering 된다.

```txt
/products/1
/products/555
```
