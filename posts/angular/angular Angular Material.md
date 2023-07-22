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

## import

> Module명은 `Mat`으로 시작함
>
> > MatButtonModule

```ts
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@Component({
  imports: [MatSlideToggleModule],
})
class SomeComponent {}
```
