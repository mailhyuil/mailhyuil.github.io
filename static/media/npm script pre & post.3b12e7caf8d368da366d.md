# npm script pre & post

## presomething

> script 전에 실행됨
>
> > 캐시파일 지우기 등을 위해 사용

```json
{
  "scripts": {
    "prebuild:dev": "npx nuxi clean",
    "build:dev": "dotenv -e .env.development -- nuxt build"
  }
}
```

## postsomething

> script 후에 실행됨

```json
{
  "scripts": {
    "postbuild:dev": "echo 'Hello, world!'",
    "build:dev": "dotenv -e .env.development -- nuxt build"
  }
}
```
