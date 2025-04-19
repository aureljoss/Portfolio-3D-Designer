import '../styles/styles-threejs.css'
import { Experience } from './Experience'
import ReactDOM from 'react-dom/client'
import React from 'react';
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.querySelector('#root'))


function Overlay() {
  return (
    <div id="intro-threejs">
      <h3>Bonjour.</h3>
      <p>
        My name is Aurelie. I am a multi-faceted designer who uniquely blends an architectural background with a tech-driven focus.
      </p>
      <ul id="contact-threejs">
        <li><a href="mailto:josserand.n.aurelie@gmail.com" class="button-threejs">Say Hello</a></li>
          <li>
            <a href="About.html" class="button-threejs">See My Projects</a>
          </li>
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

