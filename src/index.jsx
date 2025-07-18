import "../src/styles/styles-threejs.css";
import { Experience } from "./Experience";
import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
const root = ReactDOM.createRoot(document.querySelector("#root"));
import { Html, useProgress} from '@react-three/drei' // for loading progress


function Loader() {
  return <Html center><div id="loader-threejs">Something fun is loading...</div></Html>
}

function Overlay() {
  return (
    <div id="intro-threejs">
      <h4>Shaping the future through immersive 3D design.</h4>
      <p>
        My name is Aurélie (pronounced oh-reh-lee). Whether it’s a digital
        product or a physical space, I bring ideas to life through innovative
        and immersive 3D experiences.
      </p>
      <ul id="contact-threejs">
        <li>
          <a href="#portfolio-projects-section" className="button-threejs">
            See My Projects
          </a>
        </li>
      </ul>
    </div>
  );
}

root.render(
  <>
    <Overlay />
    <Canvas
      id="canvas-threejs"
      flat
      camera={{
        fov: 40,
        near: 0.1,
        far: 100,
        position: [6.8, 2, 5],
      }}
    >
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
    </Canvas>
  </>
);
