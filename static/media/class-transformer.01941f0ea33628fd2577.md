# class-transformer

## install

```
yarn add class-transformer

npm install reflect-metadata --save # reflection 사용 시
```

## method

```
plainToInstance(DTO, obj) // js object를 Class로 바꿔준다
```

## decorator

```
@Exclude()
@Expose()
@Type(() => Photo)
@Transform(({ value }) => moment(value), { toClassOnly: true })
@TransformClassToPlain({ groups: ['user.email'] })
```
