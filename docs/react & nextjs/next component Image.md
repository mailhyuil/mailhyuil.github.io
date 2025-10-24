# next component Image

> 'next/image'
>
> > 이미지를 최적화하여 제공해주는 컴포넌트

```tsx
// next optimize 사용
<Image src="/images/next.png" alt="next" width={500} height={500} />

<Image src="/images/next.png" alt="next" fill
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />

// custom loader 사용
<Image src="/images/next.png" alt="next" width={500} height={500} loader={customLoader} />
```

## custom loader

```tsx
export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  if (!src) return "";
  if (width > 3000) {
    return `${src}?format=webp`;
  }
  return `${src}?width=${width}&format=webp`;
};
```
