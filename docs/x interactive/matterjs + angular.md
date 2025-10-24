# matterjs + angular

## install

```
yarn add matter-js
yarn add @types/matter-js -D
```

## html

```html
<div #div style="width: 100vw; height: 100vh"></div>
```

## ts

```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Bodies, Engine, Render, World } from 'matter-js';

@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.scss'],
})
export class MatterComponent implements AfterViewInit {
  @ViewChild('div')
  private div: ElementRef<HTMLDivElement>;

  draw() {
    console.log(this.div.nativeElement);
    const engine = Engine.create();

    const render = Render.create({
      element: this.div.nativeElement,
      engine: engine,
      options: {
        width: 1000,
        height: 500,
        wireframes: false,
      },
    });

    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const ballA = Bodies.circle(380, 100, 40, {});
    const ballB = Bodies.circle(460, 10, 40, {});
    const ground = Bodies.rectangle(400, 380, 810, 60, {
      isStatic: true,
    });

    World.add(engine.world, [boxA, ballA, ballB, ground]);

    Engine.run(engine);
    Render.run(render);
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  ngOnInit(): void {}
}
```
