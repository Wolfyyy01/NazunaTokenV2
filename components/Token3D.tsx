"use client";

import { useEffect, useRef } from "react";
import { constants } from "@/lib/constants";

export default function Token3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let scene: any, camera: any, renderer: any, coin: any;

    const initToken3D = async () => {
      const THREE = await import("three");

      const container = containerRef.current;
      if (!container) return;

      const width = 300;
      const height = 300;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 3;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0x7e22ce, 0.1));
      const light1 = new THREE.DirectionalLight(0xec4899, 0.2);
      light1.position.set(2, 2, 2);
      scene.add(light1);
      const light2 = new THREE.DirectionalLight(0xc084fc, 0.1);
      light2.position.set(-2, -1, -1);
      scene.add(light2);


      const geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.3, 64);   
      
      const THREElogo = await new THREE.TextureLoader().loadAsync(constants.logo.src);
      const logoMaterial = new THREE.MeshBasicMaterial({
        map: THREElogo,
        transparent: true,
      });

      
      const sideMaterial = new THREE.MeshStandardMaterial({
        color: 0x9333ea,
        metalness: 0.6,
        roughness: 0.25,
        emissive: 0xec4899,
        emissiveIntensity: 0.3,
      });


      const materials = [
        sideMaterial,   // index 0 = side
        logoMaterial,   // index 1 = top face
        logoMaterial,   // index 2 = bottom face
      ];

      coin = new THREE.Mesh(geometry, materials);
      coin.rotation.x = Math.PI / 2
      coin.rotation.y = Math.PI / 2; // Rotate to face camera
      scene.add(coin);

      const animate = () => {
        requestAnimationFrame(animate);
        coin.rotation.z += 0.005;
        coin.rotation.y += 0.005;
        renderer.render(scene, camera);
      };

      animate();
    };

    initToken3D();

    return () => {
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="token-3d-container" />;
}
