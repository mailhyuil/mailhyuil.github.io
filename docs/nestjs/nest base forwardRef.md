# nest base forwardRef

> 미리 참조해놓기 (앞선 참조)
>
> > 선언 되지 않은 의존성을 미리 주입하기 위해 사용하는 함수
> >
> > > 순환 참조를 방지하기 위해 사용한다.

## A Service

```ts
@Injectable()
export class AService {
  constructor(
    @Inject(forwardRef(() => BService))
    private bService: BService,
  ) {}
}
```

## B Service

```ts
@Injectable()
export class BService {
  constructor(
    @Inject(forwardRef(() => AService))
    private aService: AService,
  ) {}
}
```
