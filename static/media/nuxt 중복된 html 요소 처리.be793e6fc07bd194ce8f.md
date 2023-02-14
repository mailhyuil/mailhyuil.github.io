# nuxt 중복된 html 요소 처리

> [{},{},{},{}]
>
> > segments로 배열에 객체를 넣어서 처리

```
type SegmentType = {
  name: string;
  status: PostType | "ALL";
};

const segments: SegmentType[] = [
  { name: "전체", status: "ALL" },
  { name: "뉴스", status: "NEWS" },
  { name: "갤러리", status: "GALLERY" },
  { name: "공지사항", status: "NOTICE" },
];
```
