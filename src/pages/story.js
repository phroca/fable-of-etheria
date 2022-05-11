import * as React from "react"
import { useRef, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import Model from "../components/story/model"
import sorcerer from "../images/sorcerer.webp"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import crystal3D from "../components/story/crystal-etheria.gltf"
const StoryContainer = styled.div`
  width: 100%;
  height: 100vh;  
  background-color: black;
  display: grid;
  grid-template-rows: auto 300px;
  position: relative;
  @media (max-width: 640px) {
    grid-template-rows: auto 400px;
  }
`
const PicturesContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
`
const Sorcerer = styled.img`
  position: absolute;
  width: 80%;
  @media (max-width: 640px) {
    width: 100vh;
  }
`
const Crystal3D = styled.div`
  position: absolute;
  height: 300px;
  top: 50%;
  @media (max-width: 640px) {
    top: 50vw;
  }
`
const TextContainer = styled.div`
  width: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 2;
`

const SorcererSpeak = styled.div`
color: #4646e9;
margin: auto 20px;
`
const PlayerSpeak = styled.div`
text-align: right;
color: white;
margin: auto 20px;
`
const Choices = styled.div`
`
const Continue = styled.div`
`
const Title = styled.h2`
`
const Text = styled.p`
`
const Box = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 3 : 2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'blue'} />
    </mesh>
  )
}

const StoryPage = () => {
  // const gltf = useLoader(GLTFLoader, crystal3D)
  return(
    <Layout>
      <Seo title="Choose your side" />
      <StoryContainer>
        <PicturesContainer>
          <Sorcerer src={sorcerer}/>
          <Crystal3D>
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </Crystal3D>
        </PicturesContainer>
        <TextContainer>
          <SorcererSpeak>
            <Title>Sorcier</Title>
            <Text>Ca m’appartient ca, tu sais au moins ce que c’est ? C’est du Crystal ! C’est une ressource indispensable à la survie du monde d’Etheria</Text>
          </SorcererSpeak>
          <PlayerSpeak>
            <Title>Joueur</Title>
            <Text>Calmez vous ! C'est quoi au juste ? Un simple caillou ?</Text>
          </PlayerSpeak>
          <Choices></Choices>
          <Continue />
        </TextContainer>
      </StoryContainer>
    </Layout>
  )
};

export default StoryPage
