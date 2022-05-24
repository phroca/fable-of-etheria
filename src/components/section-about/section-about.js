import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./section-about.css"

import staticdata from "../../../imgdata.json"

import img1 from "../../images/img-accueil/exemples-nft/4.webp"
import img2 from "../../images/img-accueil/exemples-nft/22.webp"
import img3 from "../../images/img-accueil/exemples-nft/5.webp"
import twitter from "../../images/twitter-icon.svg"

const SectionGroup = styled.div`
    position: relative;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    height: 100%;
`
const SectionHeading = styled.div`
    padding: 200px;
    display: grid;
    grid-template-rows: repeat(2, auto);
    align-items: center;
    justify-items: center;
    grid-gap: 30px;
`
const SectionTitle = styled.h2`
    color: white;
    font-size: 34px;
    font-weight: 200;
    text-align: center;
`

const SectionAboutContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    grid-gap: 50px;
`

const SectionGroupImage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
   
`

const ImageContainer = styled.div`
    position: relative;
    
`

const Image = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 20px;

`

const UserNameContainer = styled.div`
    position: relative;
    z-index: 30;
    max-width: 222px;
    height: auto;
    max-height: 60px;
    border-radius: 42px;
    border: 1.75px solid #101820;
    background-color: #0b302b;
    box-shadow: 0 0 40px rgb(115 255 66 / 36%);
    margin: -40px auto 0;
    padding: 7px 0 10px;
`

const Username = styled.div`
    font-size: 25px;
    color: #8dff1f;
    text-shadow: 0 1px 9px rgb(115 255 66 / 72%);
    text-align: center;
    margin: 0 auto 2px;
    text-transform: capitalize;
`

const Role = styled.div`
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
`

const Social = styled.a`
    display: grid;
    justify-content: center;
`

const SectionAbout = () => {

    return(
        <SectionGroup className="section-intro" >
            <SectionHeading>
                <SectionTitle className="section-intro--subtitle">
                    The fables of Etherea founders
                </SectionTitle>
                <SectionAboutContainer className="section-intro--about">
                    <SectionGroupImage className="section-intro--groupImage" >
                        <ImageContainer>
                            <Image src={img1} />
                            <UserNameContainer>
                                <Username>@sneakrypto</Username>
                                <Role>CEO</Role>
                            </UserNameContainer>
                            <Social href="https://twitter.com/Sneakrypto" target="_blank" rel="noreferrer">
                                <img src={twitter} alt="twitter" />
                            </Social>
                        </ImageContainer>
                        <ImageContainer>
                            <Image src={img2} />
                            <UserNameContainer>
                                <Username>@irocap</Username>
                                <Role>CTO</Role>
                            </UserNameContainer>
                            <Social href="https://twitter.com/IRocaP" target="_blank" rel="noreferrer">
                                <img src={twitter} alt="twitter" />
                            </Social>
                        </ImageContainer>
                        <ImageContainer>
                            <Image src={img3} />
                            <UserNameContainer>
                                <Username>@noirefuture</Username>
                                <Role>Designer - illustrator</Role>
                            </UserNameContainer>
                            <Social href="https://twitter.com/noirfuture138" target="_blank" rel="noreferrer">
                                <img src={twitter} alt="twitter" />
                            </Social>
                        </ImageContainer>
                    </SectionGroupImage>
                </SectionAboutContainer>
            </SectionHeading>
        </SectionGroup>
    )
}

export default SectionAbout