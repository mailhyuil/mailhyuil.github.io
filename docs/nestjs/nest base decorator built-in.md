# nest decorators

> 데코레이터란 metadata를 추가한다!
>
> > 데코레이터란 비즈니스 로직과 상관없는 로직을 숨기면서 기능을 확장하거나 변경할 수 있다.
> >
> > 또한 중복된 코드를 줄일 수 있다.
> >
> > > 추가된 metadata는 reflect-metadata(Reflect API)를 통해 읽을 수 있다.

## Request(), Req()

## Response(), Res()

## Body()

## Param()

## Query()

## Next()

## Session()

## Ip()

## HostParam()

## Redirect()

## Headers()

> 요청에서 headers 가져오기

```js
getUser(@Headers() headers){}
getUser(@Headers('property') property:string){}
```

## Header()

> response에 header 달기
>
> > 함수 밖에다 씀

```js
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```

## Injectable()

## Inject()

## Catch()

## UseGuards()

## UseFilter()
