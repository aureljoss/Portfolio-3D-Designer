import {
  Center,
  OrbitControls,
  CameraShake, 
  useGLTF,
  useTexture
} from "@react-three/drei";
import React from "react";

export function Experience() {
  const { nodes } = useGLTF("../model/Living Room Scene-MD.glb");
  const bakedTexture = useTexture("../model/baked-final-test.jpg");
  bakedTexture.flipY = false;

  return (
    <>
        <color attach="background" args={["#4628ff"]} />

        {/** Controls */}
        <OrbitControls
          makeDefault
          autoRotateSpeed={-0.1}
          zoomSpeed={2}
          enableZoom={false}
          minDistance={6}
          maxDistance={9}
          // enablePan={false}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          // minAzimuthAngle={(Math.PI*2)/1.15}
          // maxAzimuthAngle={Math.PI*2}
        />
        {/* Camera Shake */}
        <CameraShake
          maxYaw={0.001} // Max amount camera can yaw in either direction
          maxPitch={0.001} // Max amount camera can pitch in either direction
          maxRoll={0.02} // Max amount camera can roll in either direction
          yawFrequency={1} // Frequency of the the yaw rotation
          pitchFrequency={1} // Frequency of the pitch rotation
          rollFrequency={1} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.8} // if decay = true this is the rate at which intensity will reduce at />
        />

        {/** Soft shadows */}
          {/* <AccumulativeShadows frames={100} color={"#3d1b65"} colorBlend={5} toneMapped={true} alphaTest={0.9} opacity={1} scale={30} position={[0, -1.01, 0]}>
            <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
          </AccumulativeShadows> */}

        <Center>
          <mesh geometry={nodes.baked.geometry} >
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
        </Center>          
    </>
  );
}