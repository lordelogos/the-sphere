import { animationTimeline } from "./js/gsapAnimation";
import { loader, animate } from "./js/threeJs";

loader.load();
animate();
animationTimeline.play();

// setting up resize listener
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
