# ionic routing ion-nav

> pushing new components on to the stack.
>
> > 새로운 컴포넌트를 스택에 push한다.
> >
> > > An in-memory navigation controller. Doesn’t not effect the URL

## first.component.ts

```ts
import { Component } from "@angular/core";

import { FirstComponent } from "./page-one.component";

@Component({
  selector: "app-example",
  templateUrl: "example.component.html",
})
export class ExampleComponent {
  component = FirstComponent;
}
```

## first.component.html

```html
<ion-nav [root]="component"></ion-nav>
```

## second.component.ts

```ts
export class PageTwoComponent {
  component = PageThreeComponent;
}
```

## second.component.html

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>Page Two</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <h1>Page Two</h1>
  <div>
    <ion-nav-link router-direction="forward" [component]="component">
      <ion-button>Go to Page Three</ion-button>
    </ion-nav-link>
  </div>
</ion-content>
```
