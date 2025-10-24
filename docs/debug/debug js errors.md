# debug js errors

## Cannot use import statement outside a module

```sh
<script> type="module" 태그 추가
```

## Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of

```sh
모듈을 import할 때 확장자명, 경로 지정을 제대로 입력하지 않아서 발생하는 에러다.
리액트에서는 모듈 import 시 .js, ./를 생략해도 된다. 하지만 순수 자바스크립트에서 모듈 import할 때에는 리액트처럼 하면 에러가 발생한다.
```

## Cannot find Module dist/main

> dist 폴더에 어디선가 없는걸 참조하고 있음

## Cannot find

> tsconfig.json 변경
>
> > "moduleResolution": "node" 추가

```json
"experimentalDecorators": true,
"moduleResolution": "node",
"noImplicitAny": true,
"target": "es6",
```

## "Validation failed (numeric string is expected)"

> 핸들러 메소드의 패스가 잘못됐다
>
> > 핸들러 Query 메소드가 맨 위에

## \{"statusCode":400,"message":"an unknown value was passed to the validate function","error":"Bad Request"\}

> dto에 class-transformer로 IsNotEmpty or IsOptional 데코레이터 선언

## Cannot find module

> interface라는 이름으로 참조하니 에러
>
> > @hyuil/interface로 변경

```json
"paths": {
  // "interface": ["packages/interface/src/index.ts"]
  "@hyuil/interface": ["packages/interface/src/index.ts"]
}
```

## missing property

> 프로퍼티가 포함이 안된 것

## EPERM: operation not permitted

> 서버를 중지하고 install

## Failed to fetch dynamically imported module

> package name 확인

## Error The file is in the program because: Entry point for implicit type library

> types가 뭔가 잘못됨
>
> > 노드 모듈 삭제 후 다시 설치
