import {useEffect, useState} from 'react'
import { ScrollControls, Scroll, Backdrop, Float, RandomizedLight, PerformanceMonitor, AccumulativeShadows, PresentationControls } from '@react-three/drei'
import { RealisticLamp } from './components/RealisticLamp';
import baffle from 'baffle'
import First from './components/firstSection';
import Env from './components/Env';
import { Canvas } from '@react-three/fiber'
import Second from './components/secondSection';
import Third from './components/thirdSection';


function App() {
  const [perfSucks, degrade] = useState(false)
  const [controlsEnabled, setControlsEnabled] = useState(false);

  useEffect(()=> {
    const target = baffle('.char')
    target.set({
      characters: '░N░e░s░s░i░n░o░',
      speed: 90
    })
    target.start()
    target.reveal(1000,1000)
  })

  return (
    <>
      <color attach="background" args={['#ecdbb6']} />
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="#ecdbb6" scale={20} position={[0, -0.005, 0]}>
        <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
      </AccumulativeShadows>
      <Env perfSucks={perfSucks} />
      <ScrollControls pages={6} damping={0.1}>
        <RealisticLamp scale={1}/>
        <Backdrop
          receiveShadow
          floor={20.5} 
          segments={100}
          position={[4,-10,0]}
        >
          <meshStandardMaterial color="#ecdbb6" />
        </Backdrop>  

        <Float
          speed={1}
          rotationIntensity={0.5}
          floatIntensity={1}
          floatingRange={[1, 1]}
        >
        {/* <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
          <meshStandardMaterial color="#2a3a3f" />
        </Ring> */}
        </Float>

        <Scroll>        
        </Scroll>
        
        <Scroll html style={{width: '100%'}}>
          <First/>
          <Second/>
          <Third/>
          {/* <div style={{position:'absolute', top: 2000, left: 0 }}>  
            <button onClick={()=>{setControlsEnabled(true)}}>ligar</button>
            <button onClick={()=>{setControlsEnabled(false)}}>desligar</button>
          </div> */}
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;