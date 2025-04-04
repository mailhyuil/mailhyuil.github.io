# animation sal.js

## install

```sh
npm i sal.js

# css 추가
"node_modules/sal.js/dist/sal.css"

# animations
fade
slide-up
slide-down
slide-left
slide-right
zoom-in
zoom-out
flip-up
flip-down
flip-left
flip-right
```

## sal.directive.ts

```ts
import { Directive, OnInit } from "@angular/core";
import sal from "sal.js";

@Directive({
  selector: "[sal]",
  standalone: true,
})
export class SalDirective implements OnInit {
  salAPI?: sal.API;
  ngOnInit(): void {
    this.salAPI = sal();
  }
}
```

## global.css

- [easing](https://easings.net/ko)

```css
* {
  --sal-duration: 1s;
  --sal-delay: 1s;
}
```

## usage

```html
<h1 data-sal="slide-right" data-sal-easing="ease-out-back">hello world</h1>
```
