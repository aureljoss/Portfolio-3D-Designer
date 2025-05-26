import '../styles/styles-threejs.css'
import { Experience } from './Experience'
import ReactDOM from 'react-dom/client'
import React from 'react';
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.querySelector('#root'))


function Overlay() {
  return (
    <div id="intro-threejs">
      <p>Bonjour,</p>
      <p>
      I'm Aurelie, a multi-faceted designer who uniquely blends an architectural background with a tech-driven focus. 
      Whether it’s a <span className="bold-threejs">digital product or a physical space</span>, I brind ideas to life through innovative and immersive <span className="bold-threejs">3D experiences.</span>
      </p>
      <ul id="contact-threejs">
        <li><a href="#portfolio-projects-section" className="button-threejs">See My Projects</a></li>
        <li><a href="#about" className="button-threejs">About Me</a></li>
      </ul>
    </div>
  )
}

root.render(
  <>
    <Overlay />
    <Canvas
        id="canvas-threejs"
        flat
        camera={ {
            fov: 35,
            near: 0.1,
            far: 100,
            position: [ 0, 0.5, 6.5 ], 
        } }
    >
        <Experience />
    </Canvas>
  </>
)

