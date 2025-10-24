# next base loading.ts

## loading.ts

```ts
export default function Loading() {
  return <LoadingSkeleton />;
}
```

## Suspense

```ts
<Suspense fallback={<p>Loading feed...</p>}>
  <PostFeed />
</Suspense>
```
