import './App.css'
import * as THREE from 'three';
import { GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import React, { useEffect, useRef } from 'react';
import { render } from 'react-dom';

function App() {
  const mountRef = useRef(null); //reference to the DOM container

  useEffect(()=> {
    //create the scene
    const scene = new THREE.Scene();

    //create the camera
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, //Aspect ratio
      0.1, //Near clipping plane
      1000 //Far clipping plane
    );
    camera.position.z = 5; //move the camera back to see the objects

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); // Fullscreen canvas
    mountRef.current.appendChild(renderer.domElement); // Append the canvas to the DOM

    // Cube setup
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 'orange' });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene,camera);
    };
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      // Cleanup on unmount
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
}

export default App;

//   const loader = new GLTFLoader();
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//   const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('#bg'),
//   });

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize( window.innerWidth, window.innerHeight);

//   camera.position.setZ(30);

//   renderer.render(scene,camera);

//   // loader.load(
//   //   //resource URL
//   //   'src/assets/LightHouse.glb', 
//   //   //called when the resource is loaded
//   //   function(gltf) {
//   //     scene.add(gltf.scene);
//   //   }, 
//   //   //called while loading is progressing
//   //   function ( xhr ) {
//   //     console.log( (xhr.loaded / xhr.total * 100) + '% loaded')
//   //   }, 
//   //   //called when loading has errors
//   //   function( error) {
//   //     console.error( error ); 
//   //   }
//   // );

//   return (
//     <>
//      <h1>the returned stuff</h1>
//      <canvas id="bg"></canvas>
//     </>
//   )
// }

// export default App
