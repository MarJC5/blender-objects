import React from 'react'
import './stylesheets/main.scss'

import Header from './components/header'
import BlenderObject from './components/3DObject'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header/>
      <BlenderObject />
      <Footer/>
    </>
  )
}

export default App
