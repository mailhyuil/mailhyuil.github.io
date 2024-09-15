# next middleware auth-guard

## auth-guard.middleware.ts

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// AuthGuard Middleware
export function middleware(req: NextRequest) {
  const auth = useAuth();

  if (!auth) {
    // auth가 없는 경우 처리
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// 특정 경로에만 AuthGuard 적용 (예: /dashboard 또는 /profile 경로)
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // 보호할 경로 설정
};
```
