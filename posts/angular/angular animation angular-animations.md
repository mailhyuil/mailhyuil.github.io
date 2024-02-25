# angular-animations

> angular animations를 미리 구현해놓은 패키지

## install

```sh
npm i angular-animations
```

### ts

```ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { bounceOutAnimation } from "angular-animations";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [CommonModule],
  animations: [bounceOutAnimation()],
})
export default class HomeComponent {
  trigger = false;
  constructor() {}
}
```

### html

```html
<h1 (click)="trigger = !trigger" [@bounceOut]="trigger">Hello World</h1>
```
