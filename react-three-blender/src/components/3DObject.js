import React, { Suspense, useRef } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { softShadows, OrbitControls } from "drei";

import GLBDonut from '../objects/donut/donut.glb'

function Donut() {
  const gltf = useLoader(GLTFLoader, GLBDonut)
  // 3D Shape size
  gltf.scene.scale.set(50,50,50)

  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return <primitive object={gltf.scene} ref={mesh} position={[0, 0, 0]}/>
}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material"/>
    </mesh>
  )
}

function BlenderObject() {

  return (
    <>
      <Canvas 
        camera={{ position: [-5, 2, 10], fov: 60 }} 
        shadowMap 
        colorManagement>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={0.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.2} />
        <pointLight position={[0, -10, 0]} intensity={0.4} />
        <group>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
              receiveShadow>
              <planeBufferGeometry attach='geometry' args={[100, 100]} />
              <shadowMaterial attach='material' opacity={0.5} />
            </mesh>
          </group>
        <Suspense fallback={<Box />}>
          <Donut />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </>
  )
}

export default BlenderObject
