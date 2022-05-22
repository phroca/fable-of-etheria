import * as React from "react"
import { useRef, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
 import { Canvas, useLoader, useFrame } from "@react-three/fiber"
// import Model from "../components/story/model"
import sorcerer from "../images/sorcerer.webp"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import crystal3D from "../components/story/crystal-etheria.gltf"

import storydata from '../../storydate.json'

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
  opacity: 0;
  transition: opacity 1s ease-out;
  position: absolute;
  width: 80%;
  @media (max-width: 640px) {
    width: 100vh;
  }
  &.appeared{
    opacity: 1
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
margin: auto 20px;
`

const Choice = styled.div`
  color: white;
  cursor: pointer;
  &:hover{
    color: red;
    text-decoration: underline;
  }
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
  const [score, setScore] = useState({
    helheim: 0,
    neutre: 0,
    femto: 0
  });
  const [textSorcerer, setTextSorcerer] = useState("");
  const [currentOptions, setCurrentOptions] = useState([]);
  const [optionChoosen, setOptionChoosen] = useState("");
  const [activateGame, setActivateGame] = useState(false);
  const [currentIndexNode, setCurrentIndexNode] = useState(1);
  const startGame = () => {
    if(currentIndexNode === 1){
      showTextNode(1);
      setActivateGame(true)
    }
  }
  const showTextNode = (index) => {
    const text = storydata.find(data => data.id === index);
    setTextSorcerer(text.text);
    setCurrentOptions(text.options);
  }

  const selectOption = (option) => {
    const nextTextNodeId = option.nextText;
    setCurrentIndexNode(nextTextNodeId);
    setOptionChoosen(option.text);
    const currentScore = {...score};
    setScore({
      helheim: currentScore.helheim + isNaN(option?.pointHelheim) ? 0 : parseInt(option?.pointHelheim),
      neutre: currentScore.neutre + isNaN(option?.pointNeutre) ? 0 : parseInt(option?.pointNeutre),
      femto: currentScore.femto + isNaN(option?.pointFemto) ? 0 : parseInt(option?.pointFemto),
    })
    showTextNode(nextTextNodeId);
  }
  return(
    <Layout>
      <Seo title="Choose your side" />
      <StoryContainer>
        <PicturesContainer>
          <Sorcerer src={sorcerer}  className={activateGame ? "appeared" : ""}/>
          <Crystal3D onClick={() => startGame()}>
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </Crystal3D>
        </PicturesContainer>
        {activateGame && <TextContainer>
          <SorcererSpeak>
            <Title>Sorcier</Title>
            <Text>{textSorcerer}</Text>
          </SorcererSpeak>
          <PlayerSpeak>
            <Title>Joueur</Title>
            <Text>{optionChoosen}</Text>
          </PlayerSpeak>
          <Choices>
            {currentOptions?.map( (option, index) => (
              <Choice key={index} onClick={()=> selectOption(option)}>
              {option.text}
              </Choice>
            ))}
          </Choices>
          <Continue />
        </TextContainer>}
      </StoryContainer>
    </Layout>
  )
};

export default StoryPage
