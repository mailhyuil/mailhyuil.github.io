# nest base controller에서 service로 넘기기 규칙

## controller

> service의 앞 인자에는 body dto를 넣어주기
>
> > filter를 위한 query나 user 데이터 같은 부가적인 optional한 정보는 뒤에 options로 넣어주기

```ts
@Controller("some")
export class SomeController {
  constructor(private readonly someService: SomeService) {}

  @Post()
  @Auth()
  async create(
    @Body() body: CreateSomeDTO,
    @Query() query: CreateSomeQueryDTO,
    @GetUser() user: User,
  ): Promise<SomeDTO> {
    return this.someService.getProfile(body, {
      ...query,
      user,
    });
  }
}
```

## service

> options에 여러 type을 넣어주고 싶다면 intersection(&) 을 사용하기
>
> > options의 값은 로직에 섞여있되 없어도 에러가 나지 않아야 한다.

```ts
@Injectable()
export class SomeService {
  constructor(private readonly someRepository: SomeRepository) {}

  async create(body: CreateSomeDTO, options: CreateSomeQueryDTO & { user: User }): Promise<SomeDTO> {
    // logic ...
  }

  // 또는 이렇게
  async create(body: CreateSomeDTO, options: CreateSomeQueryDTO & CreateSomeOtherQueryDTO): Promise<SomeDTO> {
    // logic ...
  }
}
```
