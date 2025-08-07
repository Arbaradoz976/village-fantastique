import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import FlyingDragon from './FlyingDragon';
import PostProcessingControls from './PostProcessingControls';

const StaticModel = ({ url, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF(url);
  
  return (
    <primitive 
      object={scene.clone()} 
      position={position} 
      scale={scale}
      rotation={rotation}
    />
  );
};

const Ground = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="lightgreen" />
    </mesh>
  );
};

const StaticScene = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [8, 6, 8], fov: 60 }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow
          />
          
          <Ground />
          
          <StaticModel 
            url="/models/Farm.glb"
            position={[-2.7, 0, -3]}
            scale={1}
          />
          
          <StaticModel 
            url="/models/Shack.glb"
            position={[-4, 0, -1]}
            scale={1}
          />
          
          <StaticModel 
            url="/models/Windmill.glb"
            position={[-1, 0, -4]}
            scale={1}
            rotation={[0, Math.PI / 3, 0]}
          />
          
          <StaticModel 
            url="/models/Hay.glb"
            position={[-3.5, 0, -1.9]}
            scale={1}
          />

          <StaticModel 
            url="/models/Hay.glb"
            position={[-3.55, 0, -1.7]}
            scale={1}
          />
          
          <StaticModel 
            url="/models/MarketStalls.glb"
            position={[-3.55, 0, 4]}
            scale={1}
          />

          <StaticModel 
            url="/models/Mine.glb"
            position={[3, 0, -3.7]}
            scale={1}
          />

          <StaticModel 
            url="/models/Treescut.glb"
            position={[3.55, 0, -1]}
            scale={1}
          />

          <StaticModel 
            url="/models/PineTrees.glb"
            position={[3.55, 0, -1.7]}
            scale={1}
          />

          <StaticModel 
            url="/models/Farm2.glb"
            position={[-2.2, 0, -1.1]}
            scale={1}
          />
          
          <StaticModel 
            url="/models/Farm2.glb"
            position={[-0.5, 0, -1.1]}
            scale={1}
          />

          <StaticModel 
            url="/models/Farm2.glb"
            position={[-0.5, 0, -2.7]}
            scale={1}
          />

          <StaticModel 
            url="/models/SawmillSaw.glb"
            position={[3, 0, -0.4]}
            scale={0.5}
          />

          <StaticModel 
            url="/models/VillageMarket.glb"
            position={[-3.5, 0, 2]}
            scale={1}
          />

          <StaticModel 
            url="/models/MarketStalls2.glb"
            position={[-2, 0, 4.1]}
            scale={1}
          />

          <StaticModel 
            url="/models/ArcheryBuilding.glb"
            position={[3.5 , 0, 3.75]}
            scale={1}
            rotation={[0, Math.PI / -2, 0]}
          />

          <StaticModel 
            url="/models/FantasyHouse.glb"
            position={[-1.5 , 0, 1.75]}
            scale={0.4}
          />

          <StaticModel 
            url="/models/FantasyBarracks.glb"
            position={[2, 0, 2]}
            scale={0.7}
            rotation={[0, Math.PI / -8.5, 0]}
          />

          <StaticModel 
            url="/models/FantasySawmill.glb"
            position={[0 , 0, 1.75]}
            rotation={[0, Math.PI / -8, 0]}
            scale={0.4}
          />

          <StaticModel 
            url="/models/FantasyInn.glb"
            position={[0.8 , 0, 3.95]}
            rotation={[0, Math.PI / -10, 0]}
            scale={0.45}
          />

          <StaticModel 
            url="/models/BusinessBuilding.glb"
            position={[-0.7 , 0, 3.75]}
            rotation={[0, Math.PI / -1, 0]}
            scale={0.8}
          />

          <FlyingDragon 
            position={[0, 8, 0]}
            scale={0.75}
            rotation={[0, Math.PI / 7, 0]}
          />

          
          <Environment preset="sunset" />
          
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          
          {/* Effets post-processing avec panneau Leva */}
          <PostProcessingControls />
        </Suspense>
      </Canvas>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: '15px',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h3>🏰 Village Fantastique</h3>
        <p>🐲 <strong>Dragon:</strong> Vole au-dessus de la ville</p>
        <p>🏘️ <strong>Bâtiments:</strong> Maisons, marchés, fermes...</p>
        <br/>
        <p>• Clic droit + glisser : Rotation</p>
        <p>• Molette : Zoom</p>
        <p>• Regardez en l'air pour voir le dragon !</p>
      </div>
    </div>
  );
};

export default StaticScene;
