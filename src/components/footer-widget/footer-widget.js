import * as React from "react"
import styled from "styled-components"
import "./footer-widget.css"
import tvScreenNoises from "../../images/static-gif-animated-tv.gif"

const FooterContainer = styled.div`
    background: #00001F;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    padding: 100px 200px;
    grid-gap: 20px;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media(max-width: 640px) {
        padding: 100px 0px;
        align-content: center;
        justify-items: center;
        text-align: center;
    }
`
const FooterTextContents = styled.div`
    display: grid;
    grid-template-rows: auto;
`

const FooterTV = styled.div`
    position: relative;
    width: 30vw;
    height: 20vw;
    background-color: #1b1b1b;
    border-radius: 44px;
    border: 30px solid #1b1b1b;
    border-right: 200px solid #1b1b1b;
    @media(max-width: 640px) {
        border-right: 30px solid #1b1b1b;
    }
`
const Image = styled.img`
    height: 100%;
    width: 100%;
`
const Text = styled.span`
    position: absolute;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: 4vw;
    font-weight: 700;
    top: 2vw;
`
const Discord = styled.a`
    
`
const FooterWidget = ({darkMode}) => {
    
    return(
    <FooterContainer className={`${darkMode} footer--container`}>
        <FooterTextContents>
            <FooterTV>
                <Image src={tvScreenNoises}></Image>
                <Text>Join the story of Etheria</Text>
                
                <Discord></Discord>
            </FooterTV>
            
        </FooterTextContents>
    </FooterContainer>
    )
}

export default FooterWidget