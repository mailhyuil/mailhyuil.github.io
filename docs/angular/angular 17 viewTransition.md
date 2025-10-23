# angular viewTransition

> style.viewTransitionName이 같은 요소를 가지고 있으면 그 요소로 자연스럽게 애니메이션이 된다.

```ts
bootstrapApplication(App, {
  providers: [provideRouter(routes, withViewTransitions())],
});
```

## list

```html
<ul>
  <li [routerLink]="['detail', id]" [style.viewTransitionName]="'greeting' + id"></li>
</ul>
```

## detail

```html
<div [style.viewTransitionName]="'greeting' + id"></div>
```
