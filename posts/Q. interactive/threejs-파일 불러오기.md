# threejs-파일 불러오기

> gITF, GLB, GLTF, FBX, OBJ, COLLADA 파일 가능
>
> > gITF 권장

## GLTFLoader

```ts
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

loader.load(
  "path/to/model.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
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
