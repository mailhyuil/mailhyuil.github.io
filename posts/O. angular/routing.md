# routing

### install option

```
ng new routing-app --routing --defaults
```

### app-routing-module.ts

```
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];
```

### template

```html
<a
  routerLink="/first-component"
  routerLinkActive="active"
  ariaCurrentWhenActive="page"
  >First Component</a
>
<a
  routerLink="/second-component"
  routerLinkActive="active"
  ariaCurrentWhenActive="page"
  >Second Component</a
>

<router-outlet></router-outlet>
<!-- 라우팅된 화면 -->
```
