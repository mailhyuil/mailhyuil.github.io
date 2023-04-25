# angular router-outlet

## named

```html
<a [routerLink]="some"></a>

<router-outlet name="some"></router-outlet>
```

## ts

```ts
{
  path: 'some',
  component: SomeComponent,
  outlet: 'some'
},
```

##

```html
<a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
```
