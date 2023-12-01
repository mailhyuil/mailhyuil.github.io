# angular route

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "products",
    component: ProductsComponent,
    children: [
      { path: "", component: ProductsListComponent },
      { path: ":id", component: ProductDetailComponent },
    ],
  },
  { path: "**", component: PageNotFoundComponent },
];
```
