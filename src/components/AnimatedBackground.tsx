'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Vector2, ShaderMaterial, Mesh, PlaneGeometry } from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_mouse;
  varying vec2 vUv;

  // 2D Random
  float random (in vec2 st) {
      return fract(sin(dot(st.xy,
                          vec2(12.9898,78.233)))
                  * 43758.5453123);
  }

  // 2D Noise
  float noise (in vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);

      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) +
              (c - a)* u.y * (1.0 - u.x) +
              (d - b) * u.x * u.y;
  }
  
  void main() {
    vec2 st = vUv * 4.0; // Scale the noise
    st.x += u_time * 0.01; // Move the noise over time horizontally

    float n = noise(st);
    
    // Define the new "Deep Blue" color palette
    vec3 color_dark_base = vec3(0.059, 0.090, 0.165); // Dark Navy #0F172A
    vec3 color_mid_blue = vec3(0.118, 0.227, 0.541);   // Dark, rich blue #1E3A8A
    vec3 color_bright_blue = vec3(0.231, 0.510, 0.965);  // Brighter blue #3B82F6
    
    // Start with the dark base color
    vec3 color = color_dark_base;

    // Mix in the blue highlights based on noise
    color = mix(color, color_mid_blue, smoothstep(0.3, 0.45, n));
    color = mix(color, color_bright_blue, smoothstep(0.55, 0.7, n));
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane() {
  const ref = useRef<Mesh<PlaneGeometry, ShaderMaterial>>(null);
  const mouse = useRef(new Vector2());

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_mouse: { value: new Vector2() },
    }),
    []
  );

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.uniforms.u_time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ShaderPlane />
      </Canvas>
    </div>
  );
} 