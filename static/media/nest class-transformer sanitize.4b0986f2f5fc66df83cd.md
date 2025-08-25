# nestjs class-transformer sanitize

> @Expose()를 해야 노출된다.

## mask

```ts
// 첫 글자만 남기고 나머지는 *로 마스킹
@Expose()
@Transform(({ value }) => {
  return value[0] + '*'.repeat(value.length - 1);
})
name: string;

// 전부 *로 마스킹
@Expose()
@Transform(({ value }) => {
  return value.replace(/./g, '*');
})
password: string;
```
