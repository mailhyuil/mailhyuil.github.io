# class-transformer default value

```js
class SomeDTO {
  @Transform((value) => value || "123", { toClassOnly: true })
  a: string;
}
```
