import * as THREE from 'three';
import '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      planeGeometry: any;
      primitive: any;
      boxGeometry: any;
      sphereGeometry: any;
      cylinderGeometry: any;
      coneGeometry: any;
      torusGeometry: any;
      circleGeometry: any;
      ringGeometry: any;
      meshBasicMaterial: any;
      meshStandardMaterial: any;
      meshPhongMaterial: any;
      meshLambertMaterial: any;
      meshPhysicalMaterial: any;
      meshToonMaterial: any;
      shaderMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      spotLight: any;
      hemisphereLight: any;
      perspectiveCamera: any;
      orthographicCamera: any;
      line: any;
      points: any;
      sprite: any;
      texture: any;
      [key: string]: any;
    }
  }
}

// Simple type helpers for common Three.js patterns
export type ThreeVector3 = [number, number, number];
export type ThreeColor = string | number | THREE.Color;
