import React from 'react'
import './stylesheet/main.scss'

import BlenderObject from './components/3DObject'

function App() {
  return (
    <>
      <h1 className="main-title text-2xl">Blender objects</h1>
      <BlenderObject />
    </>
  )
}

export default App
