# next robots.txt

## app/robots.ts

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://onepartners.co.kr/sitemap.xml",
  };
}
```
