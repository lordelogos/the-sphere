import gsap from "gsap";
import { mesh } from "./threeJs";

export const animationTimeline = gsap.timeline({ defaults: { duration: 1 } });
animationTimeline.fromTo(
  mesh.scale,
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 1, z: 1 }
);
animationTimeline.fromTo(
  "nav > h2",
  { opacity: 0, x: -100 },
  { opacity: 1, x: 0 }
);
animationTimeline.fromTo(
  "nav > ul",
  { opacity: 0, x: 100 },
  { opacity: 1, x: 0 },
  "<"
);
animationTimeline.fromTo(".main-header", { opacity: 0 }, { opacity: 1 });
