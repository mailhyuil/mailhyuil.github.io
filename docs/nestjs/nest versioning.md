# nest versioning

## main.ts

```ts
app.enableVersioning({
  type: VersioningType.URI,
  defaultVersion: "1", // global fallback version 설정
});
```

## controller

```ts
// class에 version을 설정
@Controller({ path: "cats", version: "1" })
export class CatsController {
  @Get()
  @Version("1") // method에 version을 설정
  findAllV1() {
    return "This action returns all cats from version 1";
  }

  // method에 version을 설정
  @Get({ version: "2" })
  findAllV2() {
    return "This action returns all cats from version 2";
  }
}
```
