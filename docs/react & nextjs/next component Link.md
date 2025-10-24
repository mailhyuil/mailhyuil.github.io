# next component Link

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
