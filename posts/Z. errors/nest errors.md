# nest errors

## Cannot find Module dist/main

> dist 폴더에 어디선가 없는걸 참조하고 있음

## Cannot find

> tsconfig.json 변경
>
> > "moduleResolution": "node" 추가

```
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "noImplicitAny": true,
    "target": "es6",
```

## "Validation failed (numeric string is expected)"

> 핸들러 메소드의 패스가 잘못됐다
>
> > 핸들러 Query 메소드가 맨 위에
