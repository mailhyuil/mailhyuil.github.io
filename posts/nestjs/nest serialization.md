# nest serialization

## install

```sh
npm i class-transformer
npm i reflect-metadata
```

## class-transformer

```ts
plainToInstance;
classToPlain;
```

## global filter

```ts
app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
```
