# angular route

```ts
const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductsListComponent },
      { path: "products/:id", component: ProductDetailComponent },
    ],
  },
  { path: "**", component: PageNotFoundComponent },
];
```
