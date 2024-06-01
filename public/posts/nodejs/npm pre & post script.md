# npm script pre & post

## presomething

> something script 전에 실행됨
>
> > 캐시파일 지우기 등을 위해 사용

```sh
"prebuild:dev":"npx nuxi clean",
"build:dev": "dotenv -e .env.development -- nuxt build",
```

## postsomething

> something script 후에 실행됨

```sh
"postinstall": "echo 'Hello, world!'"
```
