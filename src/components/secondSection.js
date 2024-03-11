import '../styles.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger);

export default function Second() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current.children, {
      opacity: 0,
      y: '50%',
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      }
    });
  }, []);

  return (
    <>
      <section className='sections'>
        <div className='second' ref={textRef}>
          <div style={{ position: 'absolute', top: 'calc(36vw + 20px)', left: 300, fontSize: '18px' }}>
            illuminate your space with elegance,
            <br />
            the essence of sophistication
            <br />
            <br />
            <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
              <a style={{ fontSize: '15px', fontWeight: 600, letterSpacing: 2 }} href="https://nessino-landpage.vercel.app/">
                LANDPAGE
              </a>
              <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#fb6618' }} />
            </div>
          </div>
        </div>
      </section>  
    </>
  );
} 