# angular material

## install

```sh
ng add @angular/material
```

## tailwindcss와 함께 사용

> important 설정으로 tailwindcss가 우선적용되도록 함

```js
// tailwind.config.js
module.exports = {
  important: true,
  ...
}
```

## ts

> Module명은 `Mat`으로 시작함
>
> > MatButtonModule

```ts
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
@Component({
  imports: [MatSlideToggleModule, MatButtonModule],
})
class SomeComponent {}
```

## html

```html
<mat-slide-toggle>Toggle me!</mat-slide-toggle>

<button mat-button></button>
```
