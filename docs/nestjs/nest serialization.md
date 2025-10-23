# nest serialization

## install

```sh
npm i class-transformer
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
