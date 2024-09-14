# next SSG (Static Site Generation)

> 빌드 시에 HTML이 생성되고, 매 요청마다 재사용
>
> > angular의 resolver 역할을 대신할 수 있다.

## getStaticProps

> Blog.tsx

```tsx
function Blog({ posts }) {
  // View...
}

// 이 함수는 빌드 시 실행된다.
export async function getStaticProps() {
  // fetch 로직..
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // return 하면 Blog 컴포넌트의 props로 전달된다.
  // Blog 컴포넌트는 빌드 시에 props로 posts를 받는다.
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
```

## getStaticPaths

```tsx
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map(post => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
```
