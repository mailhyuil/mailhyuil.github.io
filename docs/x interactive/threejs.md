# threejs

## install

```
npm i three @types/three
```

## ts 파일

```ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene(); // scene 생성

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // 카메라 생성
camera.position.z = 2; // 카메라 줌값

const renderer = new THREE.WebGLRenderer(); // WebGL 렌더러 생성
renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 사이즈 설정
document.body.appendChild(renderer.domElement); // html에 삽입

const controls = new OrbitControls(camera, renderer.domElement); // OrbitControls는 카메라를 움직일 수 있음

const geometry = new THREE.BoxGeometry(); // 박스 geometry
const material = new THREE.MeshBasicMaterial({
  // mesh 설정
  color: 0x00ff00,
  wireframe: true,
});

const cube = new THREE.Mesh(geometry, material); // 박스 geometry와 mesh 설정을 넣어서 mesh 생성
scene.add(cube); // scene에 추가

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  controls.update();

  render();
}

function render() {
  renderer.render(scene, camera);
}
animate();
```

## vue

```vue
<script lang="ts" setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

onMounted(() => {
  const scene = new THREE.Scene(); // scene 생성
  const light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // 카메라 생성
  camera.position.z = 10; // 카메라 줌값
  // load a texture, set wrap mode to repeat
  const texture = new THREE.TextureLoader().load('/textures/TexturesCom_BookDesign04_graphic_S.png');
  const renderer = new THREE.WebGLRenderer(); // WebGL 렌더러 생성
  renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 사이즈 설정
  document.body.appendChild(renderer.domElement); // html에 삽입

  const controls = new OrbitControls(camera, renderer.domElement); // OrbitControls는 카메라를 움직일 수 있음

  const loader = new OBJLoader();
  loader.load(
    '/model/books.obj',
    (obj: any) => {
      scene.add(obj); // scene에 추가
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (err) => console.log(err)
  );

  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  }

  function animate() {
    requestAnimationFrame(animate);

    controls.update();
    render();
  }

  function render() {
    renderer.render(scene, camera);
  }
  animate();
});
</script>
<template>
  <div></div>
</template>
```
