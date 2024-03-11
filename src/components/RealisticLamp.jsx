import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF, useScroll, Center, Caustics, MeshTransmissionMaterial } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'

export function RealisticLamp(props) {
  const { nodes, materials } = useGLTF('./models/lamp/realisticLamp-transformed.glb')
  const robot = useRef()
  const scroll = useScroll()
  const tl = useRef()

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=> {
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

    tl.current
    .to(robot.current.rotation, {y: -1}, 2)
    .to(robot.current.position, {x: 2.2}, 2)

    .to(robot.current.rotation, {y: 1}, 6)   
    .to(robot.current.position, {x: -2.2}, 6)

    .to(robot.current.rotation, {y: 0}, 11)
    .to(robot.current.rotation, {x: 1}, 11)
    .to(robot.current.position, {x: 0}, 11)

    .to(robot.current.rotation, {y: 0}, 13)
    //.to(robot.current.rotation, {x: -1}, 13)    
    //.to(robot.current.position, {x: 0}, 13)

    // .to(robot.current.rotation, {y: 0}, 16)   
    // .to(robot.current.rotation, {x: 0}, 16) 
    // .to(robot.current.position, {x: 0}, 16)    

    // .to(robot.current.rotation, {y: 0}, 20)   
    // .to(robot.current.rotation, {x: 0}, 20) 
    // .to(robot.current.position, {x: 0}, 20)   

  },[])
  
  return (
    <group {...props} dispose={null} ref={robot}>
      <Center rotation={[0, -0.4, 0]} position={[0, 0, 0]}>
        <mesh geometry={nodes.Obj_012.geometry} material={materials.Glass_Milky__1} position={[0.003, 0.346, -0.491]} rotation={[-1.491, 0, 0]} scale={0.005} />
        <mesh geometry={nodes.Obj_000001.geometry} material={materials.Material__3} position={[0.003, -0.823, 0.004]} rotation={[-1.491, 0, 0]} scale={0.005} />
        <mesh geometry={nodes.Circle002.geometry} material={materials.BlackMetal} position={[0.003, -0.823, 0.004]} rotation={[-1.491, 0, 0]} scale={0.005} />
      </Center>

      <Caustics
        backfaces
        color={[1, 0.8, 0.8]}
        focus={[0, -1.2, 0]}
        lightSource={[-1.2, 3, -2]}
        frustum={1.75}
        intensity={0.003}
        worldRadius={0.26 / 10}
        ior={0.9}
        backfaceIor={1.26}>
        <mesh castShadow receiveShadow geometry={nodes.Circle002.geometry}>
          <MeshTransmissionMaterial
            backside
            backsideThickness={0.1}
            thickness={0.05}
            chromaticAberration={0.05}
            anisotropicBlur={1}
            clearcoat={1}
            clearcoatRoughness={1}
            envMapIntensity={2}
          />
        </mesh>
      </Caustics>
    </group>
  )
}

useGLTF.preload('./models/lamp/realisticLamp-transformed.glb')