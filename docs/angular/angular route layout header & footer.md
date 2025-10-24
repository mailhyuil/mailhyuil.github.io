# angular route layout header & footer

## layout.component.html

```html
<header class="sticky top-0 left-0 z-50">
  <router-outlet name="header"></router-outlet>
</header>
<footer>
  <router-outlet name="footer"></router-outlet>
</footer>
```

## app.routes.ts

```ts
{
  path: '',
  component: DefaultLayoutComponent,
  children: [
    {
      path: '',
      outlet: 'header',
      component: HeaderComponent,
    },
    {
      path: '',
      outlet: 'footer',
      component: FooterComponent,
    }
  ]
}
```
