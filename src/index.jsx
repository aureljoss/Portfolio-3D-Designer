import "../src/styles/styles-threejs.css";
import { Experience } from "./Experience";
import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei"; // for loading progress

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Loader() {
  return (
    <Html center>
      <div id="loader-threejs">Something fun is loading...</div>
    </Html>
  );
}

function Overlay() {
  const handlePortfolioClick = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById(
      "portfolio-projects-section"
    );
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
      // If the ScrollTrigger/animations weren't created yet (user jumped
      // directly via this link), call the fallback reveal helper after the
      // scroll completes so the projects become visible.
      // Use a short timeout to allow smooth scrolling to progress.
      setTimeout(() => {
        if (window.revealPortfolioProjects) {
          try {
            window.revealPortfolioProjects();
          } catch (err) {
            // ignore errors from the fallback
          }
        }
      }, 550);
    }
  };

  return (
    <div id="intro-threejs">
      <h3>&lt; 3D Designer & Creative Developer /&gt;</h3>
      <p>
        My name is Aurélie (pronounced oh-reh-lee). <br />I bring ideas to life by combining innovative spatial design, immersive 3D, and interactive digital experiences.
      </p>
      <ul id="projects-threejs">
        <li>
          <a
            href="#portfolio-projects-section"
            className="button-threejs"
            onClick={handlePortfolioClick}
          >
            My Projects
          </a>
        </li>
      </ul>
      <div id="scroll">
        <svg
          version="1.1"
          id="scrollArrow"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="53px"
          height="20px"
          viewBox="0 0 53 20"
          enable-background="new 0 0 53 20"
          xml:space="preserve"
        >
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
