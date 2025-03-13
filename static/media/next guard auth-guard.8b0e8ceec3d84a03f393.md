# next guard auth-guard

> next에는 guard가 없기 때문에 component를 생성하여 렌더링을 할지 말지를 결정하는 방식으로 guard를 구현할 수 있다.

## auth-guard.component.tsx

```tsx
import { useRouter } from "next/router";

export const AuthGuard = props => {
  const router = useRouter();
  const isJWTValid = useIsJWTValid(); // you need to implement this. In this example, undefined means things are still loading, null means user is not signed in, anything truthy means they're signed in

  if (typeof window !== "undefined" && user === null) router.push("/");

  if (!user) return <Loading />; // a loading component that prevents the page from rendering

  return props.children;
};
```

## usage

```tsx
const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthGuard>
      <Component {...pageProps} />
    </AuthGuard>
  );
};

export default MyApp;
```
