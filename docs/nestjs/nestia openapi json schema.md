# nestia openapi json schema

> typia의 openapi json schema 생성기

```ts
import typia, { tags } from "typia";

export const MemberSchema = typia.json.application<[IMember], "3.0">(); // 3.0은 openapi 버전 /// 3.0 | 3.1
```
