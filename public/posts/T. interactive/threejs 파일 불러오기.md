# threejs-파일 불러오기

> gITF, GLB, GLTF, FBX, OBJ, COLLADA 파일 가능
>
> > gITF 권장

## GLTFLoader

```js
import { GLTFLoader } from 'GLTFLoader';
import * as THREE from 'three';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
});

let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0, 0, 5);

let loader = new GLTFLoader();
loader.load('model/scene.gltf', (gltf) => {
  scene.add(gltf.scene);
  renderer.render(scene, camera);
});
```

## OBJLoader

```ts
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
const scene = new THREE.Scene(); // scene 생성
const light = new THREE.AmbientLight(0xffffff, 0.5); // light 생성
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // 카메라 생성
const renderer = new THREE.WebGLRenderer(); // WebGL 렌더러 생성
const loader = new OBJLoader(); // OBJLoader 생성

camera.position.z = 10; // 카메라 줌값
scene.add(light);

loader.load(
  // resource URL
  'models/monster.obj',
  // called when resource is loaded
  function (object) {
    scene.add(object);
  },
  // called when loading is in progresses
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  // called when loading has errors
  function (error) {
    console.log('An error happened');
  }
);

renderer.render(scene, camera);
```
