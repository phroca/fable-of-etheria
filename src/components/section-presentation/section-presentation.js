import * as React from "react"
import styled from "styled-components"

import basseVilleImg from "../../images/img-accueil/bordures/bordures/basse ville entiere.png"
import immeubleGaucheImg from "../../images/img-accueil/bordures/bordures/immeuble gauche.png"
import immeubleDroiteImg from "../../images/img-accueil/bordures/bordures/immeuble droite.png"
import solImg from "../../images/img-accueil/bordures/bordures/sol.png"
import cadreImg from "../../images/img-accueil/bordures/bordures/cadre.png"

import haute from "../../images/img-accueil/exemples-nft/haute.gif"
import basse from "../../images/img-accueil/exemples-nft/basse.gif"


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
    bottom: -460px;
    z-index:1;
    width: 100%;
`
const SectionPresentation = () => {


    return (
        <PresentationContainer>
            <Cadre>
                <CadreContainer src={cadreImg} />
                <Haute src={haute} />
                <Basse src={basse} />
            </Cadre>
            <BasseVille src={basseVilleImg}/>
            <ImmeubleGauche src={immeubleGaucheImg}/>
            <ImmeubleDroite src={immeubleDroiteImg}/>
            <Sol src={solImg}/>
        </PresentationContainer>
    )
}

export default SectionPresentation