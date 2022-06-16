import * as React from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

import "./section-discover.css"

import wall from "../../images/img-accueil/wall.webp"

import img1 from "../../images/img-accueil/exemples-nft/53.webp"
import img2 from "../../images/img-accueil/exemples-nft/55.webp"
import img3 from "../../images/img-accueil/exemples-nft/58.webp"
import img4 from "../../images/img-accueil/exemples-nft/63.webp"

import img5 from "../../images/img-accueil/exemples-nft/4.webp"
import img6 from "../../images/img-accueil/exemples-nft/22.webp"
import img7 from "../../images/img-accueil/exemples-nft/5.webp"
import img8 from "../../images/img-accueil/exemples-nft/6.webp"

const SectionGroup = styled.div`
    position: relative;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    height: 2500px;
    background: url(${wall}) center center;
    z-index: -1;
`

const SectionHeading = styled.div`
    padding: 600px 200px 50px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    align-items: center;
    justify-content: center;
    grid-gap: 30px;
    @media(max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3,1fr);
        padding: 200px 10px 100px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`

const SectionCard = styled.div`
    max-width: 337px;
    background: #0f2320;
    border-radius: 44px;
    border: 1.75px solid #101820;
    box-shadow: 0 0 40px rgb(66 255 0 / 67%);
    animation: glow 3s linear infinite;
    min-height: 250px;
    @keyframes glow {
        50% {
            box-shadow: 0 0 80px rgb(115 255 66 / 36%);
        }

    }

    @media(max-width: 640px) {
        width: 260px;
        height: 260px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`

const SectionCardInner = styled.div`
    border: 8px solid rgba(242,244,248,.09);
    box-sizing: border-box;
    border-radius: 44px;
    min-height: 100%;
    padding: 25px;
`
const SectionCardTitle = styled.h2`
    font-family :"Orbitron-Regular";
    font-size: 30px;
    color: white;
    text-align: center;
    @media(max-width: 640px) {
        font-size: 25px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }

`
const SectionCardText = styled.p`
    font-family :"Orbitron-Regular";
    font-size: 16px;
    color: white;
    @media(max-width: 640px) {
        font-size: 12px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`

const SectionStats = styled.div`
    width: 100%;
    height: auto;
    padding: 90px 0 100px;
    position: relative;
    overflow: hidden;
    @media(max-width: 640px) {
        padding: 0;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`
const StatWrapper = styled.div`
    width: inherit;
    height: inherit;
`
const StatGallery = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: repeat(4,360px);
    grid-gap: 5px;
    justify-items: center;
    overflow: visible;
    margin: 0 0 0 55px;
    position: relative;
    z-index: 9;
    padding: 65px 0;
    @media(max-width: 640px) {
        grid-template-columns: repeat(4,auto);
        padding: 50px 0;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`
const StatGalleryCard = styled.div`
    margin-right: 25px;
    background: #5c7b7b;
    display: grid;
    width: 340px;
    height: 340px;
    border-radius: 10%;
    border: 2px solid #101820;
    position: relative;
    @media(max-width: 640px) {
        width: 200px;
        height: 200px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
}
`
const CardPhoto = styled.img`
    margin: auto;
    width: 280px;
    height: 280px;
    border-radius: 20px;
    @media(max-width: 640px) {
        width: 200px;
        height: 200px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`
const StatInfo = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-gap: 10px;

`
const StatInfoTitle = styled.h2`
    font-family: "Orbitron-Regular";
    font-size: 75px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    @media(max-width: 640px) {
        font-size: 45px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`
const StatInfoPanels = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    justify-items: center;
    @media(max-width: 640px) {
        grid-template-columns: auto;
        grid-template-rows: repeat(3, auto);
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`

const StatInfoPanel = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    box-shadow: 0 0 40px hsl(0deg 0% 100% / 50%);
    border-radius: 44px;
    border: 1.75px solid #101820;
    height: 170px;
    width: 25vw;
    background-color: #627379;
    padding: 4px;
    position: relative;
    &.deactivate{
        box-shadow: 0 0 40px #000000 !important;
        background-color: #181818 !important;
    }
    @media(max-width: 640px) {
        height: 150px;
        width: 300px;
    }
    
    @media (min-width: 640px) and (max-width: 1080px) {
        
    }
    
    @media (min-width: 1080px) and (max-width: 1440px) {
        
    }
`
const PanelWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 97%;
    height: 90%;
    margin: auto;
    border-radius: 44px;
    border: 8px solid hsla(0,0%,100%,.24);
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
`
const Particles = styled.div`
    position: absolute;
    width: 90%;
    left: 5%;
    height: 100%;
`
const PanelTitle = styled.div`
    font-family: "Orbitron-Regular";
    font-size: 70px;
    color: white;
    text-align: center;
    @media(max-width: 640px) {
        font-size: 50px;
    }
`
const PanelSubTitle = styled.h3`
    font-family :"Orbitron-Regular";
    font-size: 14px;
    color: white;
    text-align: center;
`

const SectionDiscover = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo("#galleryLTR",
        {x: 0},{    
            scrollTrigger: {
                trigger: "#galleryLTR",
                start: "top bottom",
                scrub: 1
            },
            x: 100,
            duration: 10,
        });
    
        gsap.fromTo("#galleryRTL",
        {x: 100},{    
            scrollTrigger: {
                trigger: "#galleryRTL",
                start: "top bottom",
                scrub: 1              
            },
            x: 0,
            duration: 10,
        });
    })



    return(
        <SectionGroup >
            <SectionHeading>
                <SectionCard className="section-discover--subtitle">
                    <SectionCardInner>
                        <SectionCardTitle >
                            collect etherians & stake
                        </SectionCardTitle>
                        <SectionCardText >
                            - get your etherian, choose your side.<br/>
                            - stake your characters and earn $
                        </SectionCardText>
                    </SectionCardInner>
                </SectionCard>
                <SectionCard className="section-discover--subtitle">
                    <SectionCardInner>
                        <SectionCardTitle >
                            ecosystem
                        </SectionCardTitle>
                        <SectionCardText >
                            - $ is the utility token for the Fables of Etherians ecosystem.<br/>
                            - use $ to purchase futures collectibles for your etherians and upgrades<br/>
                        </SectionCardText>
                    </SectionCardInner>
                </SectionCard>
                <SectionCard className="section-discover--subtitle">
                    <SectionCardInner>
                        <SectionCardTitle >
                            community & membership
                        </SectionCardTitle>
                        <SectionCardText >
                            - discover the proposed quests and take part in the story<br/>
                            - the side you chose will be your best ally in the community.<br/>
                            - the member will build the factions, and promote missions for the community
                        </SectionCardText>
                    </SectionCardInner>
                </SectionCard>
                
            </SectionHeading>
            <SectionStats>
                <StatWrapper>
                    <StatGallery id="galleryLTR">
                        <StatGalleryCard >
                            <CardPhoto src={img1}></CardPhoto>
                        </StatGalleryCard>
                        <StatGalleryCard>
                            <CardPhoto src={img2}></CardPhoto>
                        </StatGalleryCard>
                        <StatGalleryCard>
                            <CardPhoto src={img3}></CardPhoto>
                        </StatGalleryCard>
                        <StatGalleryCard>
                            <CardPhoto src={img4}></CardPhoto>
                        </StatGalleryCard>
                    </StatGallery>
                    <StatInfo>
                        <StatInfoTitle>
                            Tokenomics
                        </StatInfoTitle>
                        <StatInfoPanels>
                            <StatInfoPanel>
                                <PanelWrapper>
                                    <Particles>

                                    </Particles>
                                    <PanelTitle>
                                        8888
                                    </PanelTitle>
                                    <PanelSubTitle>
                                        Genesis Etherians
                                    </PanelSubTitle>
                                </PanelWrapper>
                            </StatInfoPanel>
                            <StatInfoPanel className="deactivate">
                                <PanelWrapper>
                                    <Particles>

                                    </Particles>
                                    <PanelTitle>
                                        TBA
                                    </PanelTitle>
                                    <PanelSubTitle>
                                        ????? ????????
                                    </PanelSubTitle>
                                </PanelWrapper>
                            </StatInfoPanel>
                            <StatInfoPanel className="deactivate">
                                <PanelWrapper>
                                    <Particles>

                                    </Particles>
                                    <PanelTitle>
                                        TBA
                                    </PanelTitle>
                                    <PanelSubTitle>
                                        ????? ?? ??????
                                    </PanelSubTitle>
                                </PanelWrapper>
                            </StatInfoPanel>
                        </StatInfoPanels>
                    </StatInfo>
                    <StatGallery id="galleryRTL">
                        <StatGalleryCard>
                            <CardPhoto src={img5}></CardPhoto>
                        </StatGalleryCard>
                        <StatGalleryCard>
                            <CardPhoto src={img6}></CardPhoto>
                        </StatGalleryCard>
                        <StatGalleryCard>
                            <CardPhoto src={img7}></CardPhoto>
                        </StatGalleryCard>
                        <StatGalleryCard>
                            <CardPhoto src={img8}></CardPhoto>
                        </StatGalleryCard>
                    </StatGallery>
                </StatWrapper>
            </SectionStats>
        </SectionGroup>
    )

}
export default SectionDiscover