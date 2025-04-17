import '../styles/styles-threejs.css'
import { App } from './Experience'
import { Leva } from 'leva'
import { Logo } from '@pmndrs/branding'
import ReactDOM from 'react-dom/client'
import React from 'react';


function Overlay() {
  return (
    <div id="introduction">
      <p>
        My name is Aurelie.
      </p>
      <p id="intro-bold">
        I am a multi-faceted designer who uniquely blends an architectural background with a tech-driven focus.
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
    <App />
    <Overlay />
    <Leva collapsed />
  </>
)