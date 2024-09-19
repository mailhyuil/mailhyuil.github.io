# next middleware

> server side에서 요청과 응답을 중간에서 가로채는 역할을 하는 기능
>
> > server side를 사용해야만 사용할 수 있는 기능

## some.middleware.ts

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const baseUrl = process.env.NX_BASE_URL;

  // 요청 URL 수정
  const url = new URL(req.url);
  url.href = `${baseUrl}/${url.pathname}`;

  // 응답 객체 생성 및 CORS 관련 헤더 추가
  const response = NextResponse.rewrite(url);

  // CORS 설정: credentials 허용
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Origin", req.headers.get("origin") || "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return response;
}

// 특정 경로에만 미들웨어 적용 (e.g., /api/* 경로에만 적용)
export const config = {
  matcher: ["/api/v1/:path*"], // '/api' 하위의 모든 경로에 적용
};
```
