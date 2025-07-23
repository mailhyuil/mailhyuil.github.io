# phaser3 + angular

## install

```
yarn add phaser
```

## tsconfig.json

```json
"compilerOptions": {
    "lib": ["ES2022", "dom", "ES5", "ScriptHost"],
}
```

## component.ts

```ts
import { Component, OnInit } from "@angular/core";
import { Game } from "phaser";
import { Scene, Types } from "phaser";
@Component({
  selector: "app-phaser",
  templateUrl: "./phaser.component.html",
  styleUrls: ["./phaser.component.scss"],
})
export class PhaserComponent extends Scene implements OnInit {
  config: Types.Core.GameConfig;
  override game: Game;
  constructor() {
    super();
    this.config = {
      type: Phaser.AUTO,
      parent: "phaser-example",
      pixelArt: true,
      width: 1000,
      height: 800,
      scene: PhaserComponent,
    };
  }

  ngOnInit(): void {
    this.game = new Phaser.Game(this.config);
  }

  preload() {
    this.load.atlas("gems", "favicon.ico", "assets/img.jpg");
  }

  create() {
    //  Define the animations first
    this.anims.create({
      key: "ruby",
      frames: this.anims.generateFrameNames("gems", {
        prefix: "ruby_",
        end: 6,
        zeroPad: 4,
      }),
      repeat: -1,
    });

    this.anims.create({
      key: "square",
      frames: this.anims.generateFrameNames("gems", {
        prefix: "square_",
        end: 14,
        zeroPad: 4,
      }),
      repeat: -1,
    });

    //  The Sprite config
    const config = {
      key: "gems",
      x: { randInt: [0, 800] },
      y: { randInt: [0, 300] },
      scale: { randFloat: [0.5, 1.5] },
      anims: "ruby",
    };

    //  Make 16 sprites using the config above
    for (let i = 0; i < 16; i++) {
      this.make.sprite(config);
    }

    //  A more complex animation config object.
    //  This time with a call to delayedPlay that's a function.
    const config2 = {
      key: "gems",
      frame: "square_0000",
      x: { randInt: [0, 800] },
      y: { randInt: [300, 600] },
      scale: { randFloat: [0.5, 1.5] },
      anims: {
        key: "square",
        repeat: -1,
        repeatDelay: { randInt: [1000, 4000] },
        delayedPlay: function () {
          return Math.random() * 6000;
        },
      },
    };

    //  Make 16 sprites using the config above
    for (let i = 0; i < 16; i++) {
      this.make.sprite(config2);
    }
  }
}
```

```ts
import { AfterViewInit, Component } from "@angular/core";
import { Game, Scene, Types } from "phaser";
@Component({
  selector: "app-phaser",
  templateUrl: "./phaser.component.html",
  styleUrls: ["./phaser.component.scss"],
})
export class PhaserComponent extends Scene implements AfterViewInit {
  config: Types.Core.GameConfig;
  override game: Game;
  constructor() {
    super();
    this.config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#1b1464",
      parent: "phaser-example",
      physics: {
        default: "matter",
        matter: {
          gravity: {
            x: 0,
            y: 0,
          },
        },
      },

      scene: PhaserComponent,
    };
  }

  ngAfterViewInit(): void {
    this.game = new Phaser.Game(this.config);
  }

  preload() {
    this.load.atlas("block", "/assets/img.jpg");
  }

  create() {
    const blockA = this.matter.add
      .image(0, 300, "block")
      .setBounce(1)
      .setFriction(0);

    const blockB = this.matter.add.image(600, 300, "block").setStatic(true);

    blockA.setVelocityX(10);
    blockB.setVelocityY(10);

    this.matter.world.on(
      "collisionstart",
      (event: any, bodyA: any, bodyB: any) => {
        bodyA.gameObject.setTint(0xff0000);
        bodyB.gameObject.setTint(0x00ff00);
      }
    );
  }
}
```
