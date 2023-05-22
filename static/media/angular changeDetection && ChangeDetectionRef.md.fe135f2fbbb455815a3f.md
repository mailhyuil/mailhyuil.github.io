# angular changeDetection && ChangeDetectionRef.md

> 자식 컴포넌트에 넣기
>
> > onDoCheck하지 않는다.
> >
> > > 실제 데이터가 변경되었을 경우, 하위 컴포넌트에게 변경 감지 프로세스를 수행하도록

```
changeDetection: ChangeDetectionStrategy.OnPush,
```
