import "../src/styles/styles-threejs.css";
import { Experience } from "./Experience";
import ReactDOM from "react-dom/client";
import React, { Suspense, useEffect } from "react";
import { Canvas, invalidate } from "@react-three/fiber";
import { Html } from "@react-three/drei"; // for loading progress
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin);

/**
 * ScrollSmoother translates #smooth-content with CSS transforms. Browsers often
 * throttle or fail to repaint WebGL when that section leaves and re-enters the
 * viewport. Invalidate on scroll / visibility so the scene draws again.
 */
function RefreshCanvasWhenNeeded() {
  useEffect(() => {
    const section = document.getElementById("canvas");
    let debounce;

    const bump = () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => invalidate(), 0);
    };

    window.addEventListener("scroll", bump, { passive: true });
    window.addEventListener("resize", bump);

    const onR3fInvalidate = () => invalidate();
    window.addEventListener("r3f-invalidate", onR3fInvalidate);

    let io;
    if (section) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) invalidate();
          }
        },
        { threshold: [0, 0.05, 0.2] },
      );
      io.observe(section);
    }

    return () => {
      window.removeEventListener("scroll", bump);
      window.removeEventListener("resize", bump);
      window.removeEventListener("r3f-invalidate", onR3fInvalidate);
      clearTimeout(debounce);
      io?.disconnect();
    };
  }, []);

  return null;
}

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
      "intro-headline",
    );
    if (portfolioSection) {
      // Use gsap.to() with ScrollSmoother's proxy for smooth, compatible scrolling
      gsap.to(window, {
        scrollTo: {
          y: portfolioSection,
          autoKill: false,
        },
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          // If the ScrollTrigger/animations weren't created yet (user jumped
          // directly via this link), call the fallback reveal helper after the
          // scroll completes so the projects become visible.
          if (window.revealPortfolioProjects) {
            try {
              window.revealPortfolioProjects();
            } catch (err) {
              // ignore errors from the fallback
            }
          }
        }
      });
    }
  };

  return (
    <div id="intro-threejs">
      <h3>&lt; Multidisciplinary Designer /&gt;</h3>
      {/* <h3>&lt; 3D Designer & Creative Developer /&gt;</h3> */}
      <p>
        My name is Aurélie (pronounced oh-reh-lee). <br />I bring ideas to life
        by combining innovative spatial design, immersive 3D, and interactive
        digital experiences.
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
      resize={{ debounce: { scroll: 0, resize: 0 } }}
      camera={{
        fov: 40,
        near: 0.1,
        far: 100,
        position: [6.8, 2, 5],
      }}
    >
      <RefreshCanvasWhenNeeded />
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
    </Canvas>
  </>,
);
