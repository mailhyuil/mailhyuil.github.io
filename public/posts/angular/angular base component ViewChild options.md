# angular ViewChild options

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

> default : false
>
> > dynamic view를 생성할 때 true로 설정

```ts
@ViewChild('name', {static:true})
```
