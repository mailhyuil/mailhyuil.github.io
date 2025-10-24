# SEO JSON-LD - json-linked data

> 구조화된 데이터를 제공하는 방법
>
> > 페이지의 특성에 따라 Product, FAQ, WebSite 등 다양한 JSON-LD를 제공 적당한 값들을 넣어주면 된다.
>
> > (json-ld generator)[https://www.google.com/webmasters/markup-helper]

## install

```sh
npm i schema-dts
```

## schema-dts

```tsx
import { WebSite, WithContext } from "schema-dts";

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "휴일이의 렌트카",
  image: "https://mailhyuil.co.kr/logo.svg",
  description: "신차, 중고차 리스부터 장기렌트까지. 전문가의 맞춤 상담을 통해 최적의 차량을 추천해드립니다.",
  url: "https://mailhyuil.co.kr",
  sameAs: [
    "https://www.facebook.com/mailhyuil",
    "https://www.instagram.com/mailhyuil",
    "https://www.youtube.com/@mailhyuil",
  ],
};

export default async function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Post />
      <Faq />
    </div>
  );
}
```
