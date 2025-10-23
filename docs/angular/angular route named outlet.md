# angular route named outlet

## html

```html
<router-outlet name="header"></router-outlet>
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
