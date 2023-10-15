# class-transformer

## install

```bash
npm i class-transformer
npm i reflect-metadata --save # reflection 사용 시
```

## method

```ts
plainToInstance(DTO, obj); // js object를 Class로 바꿔준다
```

## decorator

### @Expose()

> getter나 메소드를 리턴 할 수 있게 해준다.
>
> > 프로퍼티 이름을 바꿀 수 있다

```ts
@Expose({ name: 'uid' })
id: number;
```

### @Exclude()

> 프로퍼티를 스킵 할 수 있다

```ts
export class User {
  id: number;

  email: string;

  @Exclude()
  password: string;
}
```

### @Type()

> 어레이를 사용 시 어레이 요소에 타입을 지정해준다
>
> > Set Map에도 필요

```ts
@Type(() => Post)
posts: Post[];
```

### @Transform()

> 추가적인 데이터 변환을 할 수 있다
>
> > dayjs같은 함수를 이용하여 추가 작업이 요구 시

```ts
@Type(() => Date)
@Transform(({ value }) => moment(value), { toClassOnly: true })
date: Moment;
```

```ts
@Exclude()
export class UserDTO implements IUserDTO {
  @Expose()
  // obj는 현재 클래스 즉, UserDTO
  @Transform(({ obj }: { obj: UserDTO }) => {
    return obj.profiles.find((item) => item.isMaster);
  })
  @Type(() => UserProfileDTO)
  masterProfile: IUserProfileDTO;
}
```

## DTO에 선언된 필드만 body에서 가져오기

```ts
@Exclude()
export class SomeDTO {
  @Expose()
  field1: string;
  @Expose()
  field2: string;
}
```
