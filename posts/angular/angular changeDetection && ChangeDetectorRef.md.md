# angular changeDetection && ChangeDetectorRef.md

## ChangeDetectionStratey.OnPush

> 자식 컴포넌트에 넣기
>
> > onDoCheck하지 않는다.
> >
> > > 실제 데이터가 변경되었을 경우, 하위 컴포넌트에게 변경 감지 프로세스를 수행하도록
> > >
> > > > "동적으로 변경할 수 없다!!"

```ts
changeDetection: ChangeDetectionStrategy.OnPush,
```

## ChangeDetectorRef

> 동적으로 변경할 수 있게 하기 위해 사용

```ts
constructor(private readonly cdr:ChangeDetectorRef){}
```

### detectChanges(): void

> 강제로 즉시 변경 감지 수행

### detach(): void

> 변경 감지 트리에서 분리

### reattach(): void

> 변경 감지 트리에서 합치기

### markForCheck(): void

> 변경 감지를 수행시키지 않는다

### checkNoChanges(): void
