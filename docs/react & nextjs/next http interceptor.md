# next http interceptor

> 앱 실행 시 fetch를 monkey-patch하여 모든 요청에 대해 interceptor를 적용할 수 있다.

```ts
// 예: globalFetchInterceptor.ts (앱 초기 진입 시 실행되게)

const originalFetch = window.fetch;

window.fetch = async (input, init) => {
  // 🔍 요청 가로채기
  const token = localStorage.getItem("accessToken");
  const modifiedInit = {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  try {
    const response = await originalFetch(input, modifiedInit);

    // ✅ 응답 가로채기
    if (response.status === 401) {
      console.warn("토큰 만료 또는 인증 오류");
      // 예: refresh token 시도, 로그아웃 등
    }

    return response;
  } catch (error) {
    // ❌ 에러 처리
    console.error("Fetch error intercepted:", error);
    throw error;
  }
};
```
