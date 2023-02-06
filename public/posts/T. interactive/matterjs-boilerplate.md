# matterjs-boilerplate

```vue
<script lang="ts" setup>
import {
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  Mouse,
  MouseConstraint,
  Body,
  Vector,
} from "matter-js";

const matterContainer = ref<HTMLDivElement>();
const THICCNESS = 60;

onMounted(() => {
  if (matterContainer.value) {
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
      element: matterContainer.value,
      engine: engine,
      options: {
        width: matterContainer.value.clientWidth,
        height: matterContainer.value.clientHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false,
      },
    });

    // create two boxes and a ground
    // var boxA = Bodies.rectangle(400, 200, 80, 80);
    // var boxB = Bodies.rectangle(450, 50, 80, 80);

    for (let i = 0; i < 100; i++) {
      let circle = Bodies.circle(i, 10, 30, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
      });
      Composite.add(engine.world, circle);
    }

    var ground = Bodies.rectangle(
      matterContainer.value.clientWidth / 2,
      matterContainer.value.clientHeight + THICCNESS / 2,
      27184,
      THICCNESS,
      { isStatic: true }
    );

    let leftWall = Bodies.rectangle(
      0 - THICCNESS / 2,
      matterContainer.value.clientHeight / 2,
      THICCNESS,
      matterContainer.value.clientHeight * 5,
      {
        isStatic: true,
      }
    );

    let rightWall = Bodies.rectangle(
      matterContainer.value.clientWidth + THICCNESS / 2,
      matterContainer.value.clientHeight / 2,
      THICCNESS,
      matterContainer.value.clientHeight * 5,
      { isStatic: true }
    );

    // add all of the bodies to the world
    Composite.add(engine.world, [ground, leftWall, rightWall]);

    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(engine.world, mouseConstraint);
    // allow scroll through the canvas
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    function handleResize(matterContainer: HTMLDivElement) {
      // set canvas size to new values
      render.canvas.width = matterContainer.clientWidth;
      render.canvas.height = matterContainer.clientHeight;

      // reposition ground
      Body.setPosition(
        ground,
        Vector.create(
          matterContainer.clientWidth / 2,
          matterContainer.clientHeight + THICCNESS / 2
        )
      );

      // reposition right wall
      Body.setPosition(
        rightWall,
        Vector.create(
          matterContainer.clientWidth + THICCNESS / 2,
          matterContainer.clientHeight / 2
        )
      );
    }

    window.addEventListener("resize", () =>
      handleResize(matterContainer.value)
    );
  }
});
</script>
<template>
  <div>
    <div ref="matterContainer" class="relative h-screen"></div>
  </div>
</template>
```
