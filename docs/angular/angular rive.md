# angular rive

## install

```sh
npm install ng-rive
```

## ts

```ts
import { RiveModule } from "ng-rive";

@NgModule({
  declarations: [AnimationComponent],
  imports: [CommonModule, RiveModule],
})
export class AnimationModule {}
```

## html

```html
<canvas riv="vehicles" width="500" height="500">
  <riv-animation name="idle" play></riv-animation>
</canvas>
```
