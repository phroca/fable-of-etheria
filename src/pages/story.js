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

import storydata from '../../storydate-en.json'
import fenetre from "../images/fenetre.webp"
import pupitre from "../images/pupitre.webp"
import crystal from "../images/crystal.webp"
import "../components/story.css"

const StoryContainer = styled.div`
  width: 100%;
  height: 100vh;  
  background: radial-gradient(67.13% 46.13% at 50% 50%, #343b75 0, #000000 100%);
  //background-color: black;
  display: grid;
  grid-template-rows: auto 300px;
  position: relative;
  @media (max-width: 640px) {
    grid-template-rows: auto 400px;
    // pour cacher la largeur du sorcier
    overflow: hidden;
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
  width: 70%;
  @media (max-width: 640px) {
    width: 100vh;
    overflow: hidden;
  }
  &.appeared{
    opacity: 1
  }
`
const Fenetre = styled.img`
  position: absolute;
  top: 6vw;
  @media (max-width: 640px) {
     width: 40vh;
  }

`
const Pupitre = styled.img`
  position: absolute;
  bottom: 0;
  @media (max-width: 640px) {
    width: 40vh;
    bottom: 25vh;
  }

`
const Crystal = styled.img`
  position: absolute;
  width: 5vw;
  animation: floatCristal 5s linear infinite;
  @media (max-width: 640px) {
    width: 5vh;
  }
`
const Crystal3D = styled.div`
  position: absolute;
  height: 15vw;
  width: 10vw;
  top: 30%;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  @media (max-width: 640px) {
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
text-align: right;
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
          <Fenetre src={fenetre}/>
          <Sorcerer src={sorcerer}  className={activateGame ? "appeared" : ""}/>
          <Pupitre src={pupitre}/>
          <Crystal3D onClick={() => startGame()}>
          <Crystal src={crystal}/>
          </Crystal3D>
        </PicturesContainer>
        {activateGame && <TextContainer>
          <SorcererSpeak>
            <Title>Sorcier</Title>
            <Text>{textSorcerer}</Text>
          </SorcererSpeak>
          <PlayerSpeak>
            <Title>Joueur</Title>
            {/* <Text>{optionChoosen}</Text> */}
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
