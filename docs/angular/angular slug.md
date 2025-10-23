# angular slug

## app.routes.ts

```ts
{
  path: 'my-class',
  children: [
    {
      path: ':slug',
      loadComponent: () => import('./pages/my-class/my-class.component'),
    },
    {
      path: 'create-review/:id',
      loadComponent: () =>
        import('./pages/my-class/create-review/create-review.component'),
    },
  ],
},
```

## setSlug

```ts
this.router.navigate(["/my-page", slug], {
  relativeTo: this.route,
  replaceUrl: true,
});
```

## dasherize.ts

> 공백을 -로 변경

```ts
export const dasherize = (str: string) => {
  return str.replace(/\s/g, "-").toLowerCase();
};
```
