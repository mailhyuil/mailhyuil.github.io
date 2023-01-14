# threejs-파일 불러오기

> gITF, GLB, GLTF, FBX, OBJ, COLLADA 파일 가능
>
> > gITF 권장

## GLTFLoader

```html
<body>
  <canvas id="canvas" style="width: 100vw; height: 100vh"></canvas>
</body>

<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.141.0/build/three.module.js",
      "GLTFLoader": "https://unpkg.com/three@0.141.0/examples/jsm/loaders/GLTFLoader.js"
    }
  }
</script>

<script type="module">
  import { GLTFLoader } from "GLTFLoader";
  import * as THREE from "three";

  let scene = new THREE.Scene();
  let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#canvas"),
  });

  let camera = new THREE.PerspectiveCamera(30, 1);
  camera.position.set(0, 0, 5);

  let loader = new GLTFLoader();
  loader.load("model/scene.gltf", (gltf) => {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
</script>
```

## OBJLoader

```ts
// instantiate a loader
const loader = new OBJLoader();

// load a resource
loader.load(
  // resource URL
  "models/monster.obj",
  // called when resource is loaded
  function (object) {
    scene.add(object);
  },
  // called when loading is in progresses
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function (error) {
    console.log("An error happened");
  }
);
```
