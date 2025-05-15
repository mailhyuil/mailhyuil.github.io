# next middleware

> server side에서 요청과 응답을 중간에서 가로채는 역할을 하는 기능
>
> > server side를 사용해야만 사용할 수 있는 기능

## middleware.ts

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
```
