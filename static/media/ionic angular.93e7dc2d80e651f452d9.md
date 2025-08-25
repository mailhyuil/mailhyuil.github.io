# angular ionic

## install

```bash
npm i @ionic/angular
npm i @ionic/core
```

## app.component.html

```html
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

## default.layout.html

```html
<app-side-menu></app-side-menu>
<div class="ion-page" id="main-content">
  <app-header></app-header>
  <ion-content>
    <ion-router-outlet></ion-router-outlet>
  </ion-content>
</div>
```

## style

```css
@import "@ionic/angular/css/core.css";

/* Basic CSS for apps built with Ionic */
@import "@ionic/angular/css/normalize.css";
@import "@ionic/angular/css/structure.css";
@import "@ionic/angular/css/typography.css";
@import "@ionic/angular/css/display.css";

/* Optional CSS utils that can be commented out */
@import "@ionic/angular/css/padding.css";
@import "@ionic/angular/css/float-elements.css";
@import "@ionic/angular/css/text-alignment.css";
@import "@ionic/angular/css/text-transformation.css";
@import "@ionic/angular/css/flex-utils.css";
```
