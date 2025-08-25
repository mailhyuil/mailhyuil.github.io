# nuxtjs 라우팅 버그

```
<NuxtPage :key="$route.fullPath" />
```

> 페이지를 라우팅하는 과정에서 데이터가 사라진다
>
> > path를 key로 사용해서 데이터를 강제로 리로드 해준다.

```
 $route.fullPath == 쿼리스트링 포함 o

 $route.path == 쿼리스트링 포함 x
```
