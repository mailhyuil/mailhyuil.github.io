# angular SSR hydration

> 서버에서 생성된 HTML, 데이터, 상태값 등을 클라이언트에서 되찾아 사용하는 일련의 과정

## skip hydration

```ts
@Component({
  host: { ngSkipHydration: "true" },
})
class ExampleCmp {}
// 또는
<example-cmp ngSkipHydration />;
```
