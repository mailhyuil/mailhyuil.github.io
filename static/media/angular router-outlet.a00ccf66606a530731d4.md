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

## routerLink outlet

```html
<a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
```

## routerLink param

## html

```
<div [routerLink]="['./', 0]"></div>
```

## app.routes.ts

```ts
{
  path: 'notice',
  children: [
    { path: '', component: NoticePage },
    { path: ':id', component: NoticeDetailPage },
  ],
},
```
