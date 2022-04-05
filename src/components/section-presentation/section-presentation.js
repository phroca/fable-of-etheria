import * as React from "react"
import styled from "styled-components"

import basseVilleImg from "../../images/img-accueil/bordures/bordures/basse ville entiere.png"
import immeubleGaucheImg from "../../images/img-accueil/bordures/bordures/immeuble gauche.png"
import immeubleDroiteImg from "../../images/img-accueil/bordures/bordures/immeuble droite.png"
import solImg from "../../images/img-accueil/bordures/bordures/sol.png"
import cadreImg from "../../images/img-accueil/bordures/bordures/cadre.png"

import haute from "../../images/img-accueil/exemples-nft/haute.gif"
import basse from "../../images/img-accueil/exemples-nft/basse.gif"
import clouds from "../../images/img-accueil/clouds.png"

const PresentationContainer = styled.div`
    height: 2900px;
    background: #00001F;
    position: relative;
    
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
    background: #30d126;
    height: 950px;
    width: 450px;
    top: 100px;
    box-shadow: 0 0 20px 80px #30d12625;
    animation: clignotant 10s step-start infinite;
    @keyframes clignotant{
        0%,2%, 71%,73%, 98%{
            opacity: 0;
        }

        1%,3%, 70%,72%, 99%, 100% {
            opacity: 1;
        }
    }
`
const CadreContainer = styled.img`
    position: absolute;
    width: 800px;
`
const Haute = styled.img`
    position: absolute;
    width: 200px;
    border-radius: 10px;
    top: 300px;
`
const Basse = styled.img`
    position: absolute;
    width: 200px;
    border-radius: 10px;
    top: 700px
`

const BasseVille = styled.img`
    position: absolute;
    z-index:2;
    width: 100%;
`
const ImmeubleGauche = styled.img`
    position: absolute;
    left:0;
    height: 1500px;
    z-index:1;
`
const ImmeubleDroite = styled.img`
    position: absolute;
    right: 0;
    height: 1500px;
    z-index:1;
`
const Sol = styled.img`
    position: absolute;
    bottom: -845px;
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
    font-family: "Handkerchief";
    font-size: 50px;
    color: white;
    text-transform: uppercase;
`
const PresentationSub = styled.p`
    font-family :"Orbitron-Regular";
    font-size: 16px;
    color: white;
    text-align: center;
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

const FlashingLightGauche = styled.div`
    position: absolute;
    height: 0;
    width: 50px;
    border-top: 160vh solid rgba(255,255,255,0.9);
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    left: 200px;
    transform-origin: 100% 100%;
    animation: wavingLeft 8s linear infinite;

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

const FlashingLightDroite = styled.div`
    position: absolute;
    height: 0;
    width: 50px;
    border-top: 160vh solid rgba(255,255,255,0.9);
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    right: 200px;
    transform-origin: 100% 100%;
    animation: wavingRight 5s linear infinite;

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
            <FlashingLightGauche />
            <FlashingLightDroite />
            <BasseVille src={basseVilleImg}/>
            <ImmeubleGauche src={immeubleGaucheImg}/>
            <ImmeubleDroite src={immeubleDroiteImg}/>
            <Sol src={solImg}/>
        </PresentationContainer>
    )
}

export default SectionPresentation