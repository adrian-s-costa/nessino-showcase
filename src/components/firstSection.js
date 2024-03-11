import '../styles.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger);

export default function First() {
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
        <div className='first' ref={textRef}>
          <div className="char" style={{ position: 'absolute', top: 40, left: 40 }}>N</div>
          <div className="char" style={{ position: 'absolute', top: 40, left: 'calc(20vw - 20px)' }}>E</div>
          <div className="char" style={{ position: 'absolute', top: 40, left: 'calc(40vw - 20px)' }}>S</div>
          <div className="char" style={{ position: 'absolute', top: 'calc(20vw + 20px)', left: 'calc(20vw - 20px)' }}>S</div>
          <div className="char" style={{ position: 'absolute', top: 'calc(34vw + 20px)', left: 'calc(40vw - 20px)' }}>I</div>
          <div className="char" style={{ position: 'absolute', top: 'calc(34vw + 20px)', left: 'calc(60vw - 20px)' }}>N</div>
          <div className="char" style={{ position: 'absolute', top: 'calc(34vw + 20px)', left: 'calc(80vw - 20px)' }}>O</div>
          <div style={{ position: 'absolute', top: 40, right: 160, fontSize: '15px', textAlign: 'right' }}>
            A DEV
            <br />
            COLLECTIVE
          </div>
          <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '15px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
            —
            <br />
            11/03/24
          </div>
          <svg style={{ position: 'absolute', right: 40, top: '24vw' }} width="54" height="23" viewBox="0 0 54 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="54" y2="1.5" stroke="#fb6618" strokeWidth="3" />
            <line y1="11.5" x2="54" y2="11.5" stroke="#fb6618" strokeWidth="3" />
            <line y1="21.5" x2="54" y2="21.5" stroke="#fb6618" strokeWidth="3" />
          </svg>
          <div style={{ position: 'absolute', top: 'calc(36vw + 20px)', left: 120, fontSize: '18px' }}>
            Let your light shine brighter,
            <br />
            than ever before
            <br />
            <br />
            <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
              <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#fb6618' }} />
            </div>
            <br />
          </div>
        </div>
      </section>  
    </>
  );
} 
