# angular base component ViewChild options

## read

> 어떤 타입을 리턴할지 명시
>
> TemplateRef, ElementRef, ViewContainerRef, selector 이름, 또는 provider token
>
> > 명시하지 않으면 ElementRef를 리턴

```ts
@ViewChild(TemplateRef)
@ViewChild(ElementRef)
@ViewChild(ViewContainerRef)
@ViewChild(SomeComponent)
@ViewChild(SomeDirective)
@ViewChild('selector_name')
@ViewChild('token_name')

@ViewChild('name', {read: 'token_name'}) // 여기에 넣어도 됨
```

## static

> static true 로 쓰면 항상 있다라고 판단하고 한번만 계산해서 캐싱
>
> > 성능 때문에 들어간 피쳐
> >
> > > 그래서 동적으로 존재 여부가 변경되는 경우는 static: true를 쓰시면 안됨

```ts
@ViewChild('name', {static:true})
```
