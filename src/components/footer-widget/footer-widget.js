import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./footer-widget.css"
import staticdata from "../../../imgdata.json"
import arrowRight from "../../images/arrow-right.svg"

const FooterContainer = styled.div`
        background: #00001F;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        padding: 100px 150px;
        grid-gap: 20px;
        transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    `
    const FooterTextContents = styled.div`
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        max-width: 450px;
    `
    const FooterTextTitle = styled.div`
        font-size: 50px;
        font-weight: 500;
    `
    const FooterParagraph = styled.div`
        font-size: 18px;
        font-weight: 200;
    `
    const FooterJoinUsGrid = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        grid-gap: 40px;
    `

const FooterWidget = ({darkMode}) => (
        <FooterContainer className={`${darkMode} footer--container`}>
            <FooterTextContents>
                <FooterTextTitle>
                    Become one of the Etherian ones !
                </FooterTextTitle>
                <FooterParagraph>
                    Lorem ipsum sectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, 
                    quis nostrud exercitation
                </FooterParagraph>
                <FooterJoinUsGrid>
                <div className="animated--arrow">
                    <img src={arrowRight} />
                </div>
                <Link to="/join-us"><button>Join us</button></Link>
                </FooterJoinUsGrid>
            </FooterTextContents>
            <div class="footer--group--image">
                <div className="img-1"><img src={staticdata.image[0].imageSrc} /></div>
                <div className="img-2"><img src={staticdata.image[1].imageSrc} /></div>
            </div>
        </FooterContainer>
        
)

export default FooterWidget