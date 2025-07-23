# class-transformer

> json을 dto로 serialize, deserialize 해주는 라이브러리
>
> > class-validator와 함께 사용한다 (dto는 유효성 검사의 역할을 수행하기 때문에)

## install

```bash
npm i class-transformer
npm i reflect-metadata --save # reflection 사용 시
```

## method

```ts
plainToInstance(UserDTO, obj); // js object를 Class로 바꿔준다
```
