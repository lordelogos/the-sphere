import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export let scene, camera, renderer, controls, mesh, geometry, material, light;
init();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(2);
  document.body.appendChild(renderer.domElement);

  // setting up controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 8;

  // displaying the 3d object
  geometry = new THREE.SphereGeometry(1, 64, 64);
  material = new THREE.MeshStandardMaterial({ color: "#de005e" });
  mesh = new THREE.Mesh(geometry, material);

  // setting up the light
  light = new THREE.PointLight("#fff", 1, 100);
  light.position.set(0, 10, 10);
  scene.add(light);
  scene.add(mesh);

  // set up camera position
  camera.position.z = 5;
}

// animation loop
export function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

const loadingManager = new THREE.LoadingManager(() => {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.classList.add("loading-none");
});

export const loader = new THREE.BufferGeometryLoader(loadingManager);
