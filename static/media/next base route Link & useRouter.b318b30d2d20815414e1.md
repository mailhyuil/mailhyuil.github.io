# next routing

## Link / useRouter()

> angular의 routerLink와 Router와 같은 역할

```tsx
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Link href="/contact" passHref>
        <p>Contact</p>
      </Link>
      <p onClick={() => router.push("/about")}>About</p>
    </div>
  );
}
```

## 동적 라우팅

> 폴더 이름에 ()을 붙이면 skip
>
> > 폴더 이름에 []를 붙이면 동적 라우팅

```txt
app/blog/[id].tsx

app/(client)/posts/1
```
