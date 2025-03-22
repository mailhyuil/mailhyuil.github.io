# nest versioning

## main.ts

```ts
app.enableVersioning();
```

## controller

```ts
// class에 version을 설정
@Controller({path: 'cats', version: '1'})

// method에 version을 설정
@Version('1')
```
