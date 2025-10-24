# next base sitemap.ts

## app/sitemap.ts

```ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://onepartners.co.kr";

  const productIds = await fetch(baseUrl + "/api/v1/cars")
    .then(res => res.json())
    .then(data => data.map((item: { id: string }) => item.id));

  const staticRoutes = ["", "advantages-rent", "model", "rent-process", "review", "promotion"];

  const staticPages = staticRoutes.map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productPages = productIds.map((id: string) => ({
    url: `${baseUrl}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
```
