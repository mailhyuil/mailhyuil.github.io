# plainToInstance & instanceToPlain

> class === instance
>
> > nestjs의 DTO는 DTO class의 인스턴스 이고 prisma의 JSON 필드는 plain javascript object만 받기 때문에 변환을 해줘야한다.

```js
jsonField: instanceToPlain(dto);
```

## plain javascript object

> {} 로 생성하는 자바스크립트 오브젝트

```js
{
  "name": "hyuil",
  "age": 2
}
```

## instance of specific class

> 특정 클래스의 인스턴스

```js
Cat {
  "name": "hyuil",
  "age": 2
}
```
