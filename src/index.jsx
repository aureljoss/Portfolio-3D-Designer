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
      <h3>&lt; 3D Designer & Creative Developer /&gt;</h3>
      <p>
        My name is Aurélie (pronounced oh-reh-lee). <br/>
        I bring ideas to life through immersive 3D design and innovative digital experiences.
      </p>
      <ul id="contact-threejs">
        <li>
          <a href="#portfolio-projects-section" className="button-threejs">
            My Projects
          </a>
        </li>
      </ul>
      <div id="scroll">
            <svg version="1.1" id="scrollArrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enable-background="new 0 0 53 20" xml:space="preserve">
                <g>
                    <polygon points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779 	"></polygon>
                </g>
            </svg>
        </div>
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
