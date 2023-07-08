# nest Headers Decorator

## @Headers()

> 요청에서 headers 가져오기

```
getUser(@Headers() headers){}
getUser(@Headers('property') property:string){}
```

## @Header()

> response에 header 달기
>
> > 함수 밖에다 씀

```
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```
