import * as React from "react"
import styled from "styled-components"

import basseVilleImg from "../../images/img-accueil/bordures/bordures/basse ville entiere.webp"
import immeubleGaucheImg from "../../images/img-accueil/bordures/bordures/immeuble gauche.webp"
import immeubleDroiteImg from "../../images/img-accueil/bordures/bordures/immeuble droite.webp"
import solImg from "../../images/img-accueil/bordures/bordures/sol.webp"
import cadreImg from "../../images/img-accueil/bordures/bordures/cadre.webp"

import haute from "../../images/img-accueil/exemples-nft/haute.gif"
import basse from "../../images/img-accueil/exemples-nft/basse.gif"
import clouds from "../../images/img-accueil/clouds.webp"
import light from "../../images/img-accueil/bordures/bordures/light.webp"

const PresentationContainer = styled.div`
    height: 2900px;
    background: #00001F;
    position: relative;
    @media(max-width: 640px) {
        height: 1200px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        height: 1400px;
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        height: 1800px;
    }
`

const Cadre = styled.div`
    position: relative;
    display: grid;
    justify-content: center;
    justify-items: center;
}
`

const CadreBackground = styled.div`
    position: absolute;
    background: #dddddd;
    height: 47vw;
    width: 23vw;
    top: 6vw;
    box-shadow: 0 0 50px gold,0 0 150px gold, inset 0 20px 20px 40px whitesmoke, inset 30px 0 35px 50px ivory;
    animation: clignotant 10s step-start infinite;
    @keyframes clignotant{
        0%,2%, 71%,73%, 98%{
            background: #000000;
            box-shadow: none;
        }

        1%,3%, 70%,72%, 99%, 100% {
            background: #dddddd;
            box-shadow: 0 0 50px gold,0 0 150px gold, inset 0 20px 20px 40px whitesmoke, inset 30px 0 35px 50px ivory;
        }
    }
`
const CadreContainer = styled.img`
    position: absolute;
    width: 40vw;
`
const Haute = styled.img`
    position: absolute;
    width: 10vw;
    border-radius: 10px;
    border: solid 2px black;
    top: 15vw;
`
const Basse = styled.img`
    position: absolute;
    width: 10vw;
    border-radius: 10px;
    border: solid 2px black;
    top: 35vw;
`

const BasseVille = styled.img`
    position: absolute;
    z-index:2;
    width: 100%;
`
const ImmeubleGauche = styled.img`
    position: absolute;
    left:0;
    height: 75vw;
    z-index:1;
`
const ImmeubleDroite = styled.img`
    position: absolute;
    right: 0;
    height: 75vw;
    z-index:1;
`
const Sol = styled.img`
    position: absolute;
    z-index:1;
    width: 100%;
`

const PresentationText = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
`
const PresentationTitle = styled.h2`
    font-family: "Orbitron-Regular";
    font-size: 50px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    @media(max-width: 640px) {
        font-size: 50px;
    }

`
const PresentationSub = styled.p`
    font-family :"Orbitron-Regular";
    font-size: 16px;
    color: white;
    text-align: center;
    margin: auto 30px;
`

const PresentationSky = styled.div`
    position: absolute;
    height: 350px;
    width: 100%;
    top: 0;
    overflow: hidden;
    span{
        position: absolute;
        display: block;
        height: 4px;
        width: 4px;
        background: white;
        box-shadow: 0 0 0 2px rgba(255,255,255,0.1);
        
        &:nth-child(1){
            top: 50%;
            animation: move 20s linear infinite;
        }
        &:nth-child(2){
            top: 20%;
            animation: move 40s linear infinite;
        }
        &:nth-child(3){
            top: 10%;
            animation: move 30s linear infinite;
        }
        &:nth-child(4){
            top: 40%;
            animation: move 60s linear infinite;
        }
        &:nth-child(5){
            top: 80%;
            animation: move 37s linear infinite;
        }
        &:nth-child(6){
            top: 34%;
            animation: move 50s linear infinite;
        }
        &:nth-child(7){
            top: 62%;
            animation: move 100s linear infinite;
        }
        &::after{
            content: ' ';
            position: absolute;
            transform: rotateY(180deg);
            top: 50%;
            right: 0;
            width: 40px;
            height: 1px;
            background: linear-gradient(90deg, white, transparent);
        }
    }

    @keyframes move{
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(2000px);
        }
    }
`

const PresentationCloud = styled.div`
    background:transparent url(${clouds}) repeat top center;
    z-index:2;
    opacity: .4;
    animation:move-clouds-back 200s linear infinite;
    position :absolute;
    top: 40%;
    left: 0;
    width:100%;
    height:620px;
    @keyframes move-clouds-back{
        from {background-position:0 0;}
        to {background-position:10000px 0;}
    }
`

const FlashingLightGauche = styled.img`
    position: absolute;
    left: 0px;
    top: 35vw;
    height: 80vw;
    transform-origin: 100% 100%;
    animation: wavingLeft 8s linear infinite;
    @media(max-width: 640px) {
        top: 180vw;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        top: 60vw;
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
    @keyframes wavingLeft {
        0%{
            transform: rotate3d(1, 1, 1, 0deg);
        }
        50%{
            transform: rotate3d(1, 1, 1, 10deg);
        }
        100%{
            transform: rotate3d(1, 1, 1, 0deg);
        }
    }
`

const FlashingLightDroite = styled.img`
    position: absolute;
    right: 0px;
    top: 35vw;
    height: 80vw;
    transform-origin: 100% 100%;
    animation: wavingRight 5s linear infinite;

    @media(max-width: 640px) {
        top: 180vw;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        top: 60vw;
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
    @keyframes wavingRight {
        0%{
            transform: rotate3d(1, 1, 1, 350deg);
        }
        50%{
            transform: rotate3d(1, 1, 1, 339deg);
        }
        100%{
            transform: rotate3d(1, 1, 1, 350deg);
        }
    }
`
const SectionPresentation = () => {


    return (
        <PresentationContainer>
            <PresentationSky>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </PresentationSky>
            <PresentationCloud />
            <PresentationText>
                <PresentationTitle>
                    Choose your side,
                    Stake, Yield
                </PresentationTitle>
                <PresentationSub>
                In 2672, the Earth has reach its limits. The humanity is on a perpertual war between two sides.<br/><br/>
                Get your Etherian with collectibles, stake to yield & build your army to climb the ranks.
                </PresentationSub>
            </PresentationText>
            <Cadre>
                <CadreBackground />
                <CadreContainer src={cadreImg} />
                <Haute src={haute} />
                <Basse src={basse} />
            </Cadre>
            <FlashingLightGauche src={light}/>
            <FlashingLightDroite src={light}/>
            <BasseVille src={basseVilleImg}/>
            <ImmeubleGauche src={immeubleGaucheImg}/>
            <ImmeubleDroite src={immeubleDroiteImg}/>
            <Sol src={solImg}/>
        </PresentationContainer>
    )
}

export default SectionPresentation