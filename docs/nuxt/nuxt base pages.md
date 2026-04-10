# nuxt pages

## 동적라우팅

- useRoute().params.id로 id값 가져오기

```txt
pages/posts/[id].vue → /posts/1, /posts/abc
pages/posts/[[id]].vue → /posts, /posts/1, /posts/abc

pages/users/[userId]/settings.vue → /users/123/settings
```

## 포괄적 라우팅

- 특정 경로 아래의 모든 하위 경로를 한 파일에서 처리하고 싶을 때
- useRoute().params.slug는 배열 형태(['a', 'b', 'c'])로 들어옵니다.

```txt
pages/[...slug].vue → /a, /a/b, /a/b/c
```

## client & server page

```txt
*.client.vue → 클라이언트에서만 렌더링되는 페이지
*.server.vue → 서버에서만 렌더링되는 페이지
```
