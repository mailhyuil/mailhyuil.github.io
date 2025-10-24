# nuxt compasables

> use[Name]을 사용하여 전역으로 사용할 수 있는 메소드
>
> > composables 폴더에 정의

## format

```ts
export const useFoo = () => {
  return useState("foo", () => "bar");
};
```
