# angular lazy loading (@defer)

> component를 Lazy Loading하는 방법 중 하나 (다른 하나는 loadComponent)

```
@defer {
  <lazy-loading-component />
} @placeholder {
  Placeholder
} @loading {
  Loading...
}
```

## trigger

### @defer (on idle)

> default 값
>
> > browser가 idle 상태일 때

### @defer (on viewport)

> component가 viewport에 들어왔을 때
>
> > 내부적으로 IntersectionObserver를 사용한다.
> >
> > > root component가 아닌 경우 반드시 매개변수를 넣어줘야한다.
> > >
> > > 매개변수에는 defer 된 컴포넌트는 사용할 수 없다.

```html
<!-- 이 greeting element는 defer면 안됨 -->
<div #greeting>Hello!</div>
@defer (on viewport(greeting)) {
<greetings-cmp />
}

<div #wrapper>
  @defer (on viewport(wrapper)) {
  <greetings-cmp />
  }
</div>
```

### @defer (on immediate)

> 즉시

### @defer (on hover)

> hover 이벤트가 발생할 때

```html
@defer (on hover) {
<large-cmp />
} @placeholder {
<div>Large component placeholder</div>
}
```

### @defer (on interaction)

> click, keydown 이벤트가 발생할 때

```html
<div #greeting>Hello!</div>
@defer (on interaction(greeting)) {
<greetings-cmp />
}
```

### @defer (on timer(500ms))

> 500ms 후

```ts
@defer (on timer(500ms)) {
  <large-cmp />
} @placeholder {
  <div>Large component placeholder</div>
}
```

## @defer (when condition)

> condition이 true일 때

```ts
@defer (when condition) {
  <large-cmp />
} @placeholder {
  <div>Large component placeholder</div>
}
```
