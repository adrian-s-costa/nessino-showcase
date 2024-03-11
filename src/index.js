import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas 
      shadows
      camera={{ position: [20, 0.9, 20], fov: 26 }}
    >
      <App />
    </Canvas>
  </React.StrictMode>
);
