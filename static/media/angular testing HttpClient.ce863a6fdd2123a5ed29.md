# testing HttpClient

> 테스트 시에 실제 서버 호출 없이 독립적으로 테스트할 수 있도록 도와주기 위해서
>
> > SpyObj를 생성해서 사용

## 초기화

```ts
let httpClientSpy: jasmine.SpyObj<HttpClient>;
let heroService: HeroService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  heroService = new HeroService(httpClientSpy);
});
```

## 사용

```ts
const expectedRes: IUserDTO[] = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

httpClientSpy.get.and.returnValue(asyncData(expectedRes));

heroService.getHeroes().subscribe({
  next: (data) => {
    expect(data).withContext("expected data").toEqual(expectedRes);
    done();
  },
  error: done.fail,
});

expect(httpClientSpy.get.calls.count()).withContext("one call").toBe(1);
```
