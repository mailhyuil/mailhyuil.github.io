# image cache busting

> 브라우저는 img, script 태그등을 cors 처리하지 않는다
>
> http request에 origin을 추가하지 않음
>
> > 문제 origin이 설정되지 않는 request에 대한 응답에는 헤더가 없다
> > 이게 캐시될 경우 문제가 발생
> >
> > > 캐시를 하지 않는것으로 해결

## fetch에서 busting

```sh
Cache-Control: no-cache
```

## img tag에서 busting

```html
<img src="picture.jpg?1222259157.415" alt="" />
```
