import { RGBELoader } from "three-stdlib";
import { Canvas, useLoader} from "@react-three/fiber";
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  CameraShake
} from "@react-three/drei";
import { useControls, button } from "leva";
import {
  EffectComposer,
  HueSaturation,
  BrightnessContrast,
} from "@react-three/postprocessing";
import React from "react";
import * as THREE from 'three'

export function App(...config) {

  return (
    <>
      <Canvas
        shadows
        orthographic
        camera={{ position: [0, 40, 44], zoom: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <color attach="background" args={["#efefef"]} />
        {/** The text and the grid */}
        <Text
          config={config}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 2.25]}
        >
          {"Bonjour."}
        </Text>
        {/* <mesh position={-2,-7,8} scale={ 1.5 }>
          <sphereGeometry />
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh position={ [2,5,4] } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh> */}

        {/** Controls */}
        <OrbitControls
          makeDefault 
          autoRotate={false}
          autoRotateSpeed={-0.2}
          zoomSpeed={0.85}
          minZoom={20}
          maxZoom={80}
          enablePan={false}
          dampingFactor={0.03}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 3}
          enableZoom={false}
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
        {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
        <Environment resolution={32}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer
              intensity={20}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={[10, 10, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={[10, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, -1, -1]}
              scale={[10, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={[20, 2, 1]}
            />
            <Lightformer
              type="ring"
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-0.1, -1, -5]}
              scale={10}
            />
          </group>
        </Environment>
        {/** Soft shadows */}
          {/* <AccumulativeShadows frames={100} color={"#3d1b65"} colorBlend={5} toneMapped={true} alphaTest={0.9} opacity={1} scale={30} position={[0, -1.01, 0]}>
            <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
          </AccumulativeShadows> */}
      </Canvas>
    </>
  );
}

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#666666" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ":" + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}
        >
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
  </Instances>
);

function Text({
  children,
  config,
  font = "/Inter_Medium_Regular.json",
  ...props
}) {
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            lineHeight={0.6}
            height={0.2}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            <MeshTransmissionMaterial
              {...config}
              background={texture}
              backside="true"
              backsideThickness={0.3}
              samples={16}
              resolution={1024}
              transmission={1}
              clearcoat={0}
              clearcoatRoughness={0}
              roughness={0}
              thickness={0.3}
              chromaticAberration={5}
              anisotropy={0.2}
              distortion={0.8}
              distortionScale={0.1}
              temporalDistortion={0}
              ior={2}
              color={"#d5b6f8"}
              gcolor={"#b8cce8"}
              shadow={"#3d1b65"}

            />
          </Text3D>
        </Center>
        {/* <Grid /> */}
      </group>
    </>
  );
}
