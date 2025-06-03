import '../styles/styles-threejs.css'
import { Experience } from './Experience'
import ReactDOM from 'react-dom/client'
import React from 'react';
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.querySelector('#root'))


function Overlay() {
  return (
    <div id="intro-threejs">
      <h4>Designing immersive 3D worlds to shape the future.</h4>
      <p>
      I am a multi-faceted designer who uniquely blends an architectural background with a tech-driven focus. 
      Whether it’s a digital product or a physical space, I bring ideas to life through innovative and immersive 3D experiences.
      </p>
      <ul id="contact-threejs">
        <li><a href="#portfolio-projects-section" className="button-threejs">See My Projects</a></li>
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
            fov: 40,
            near: 0.1,
            far: 100,
            position: [ 6, 4, -8 ],
        } }
    >
        <Experience />
    </Canvas>
  </>
)

