# next guard

> react에서는 컴포넌트로 감싸는 방식으로 decorator를 구현할 수 있다.

## AuthGuard.tsx

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
