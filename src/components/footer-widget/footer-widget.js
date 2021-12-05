import * as React from "react"
import styled from "styled-components"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
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
        padding: 100px 200px;
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

const FooterWidget = ({darkMode}) => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=> {
        gsap.fromTo(
            ".ftg-img-1",
            {transform: 'translateX(100px)'}, { 
            scrollTrigger: {
                trigger: ".ftg-img-1",
                start:  "top bottom",
                end: "bottom top",
                toggleActions: "restart none restart none",
            },
            transform: 'rotate(350deg) translateX(50px)',
            duration: 2
            }
        );

        gsap.fromTo(
            ".ftg-img-2",
            {transform: 'translateX(-100px)'}, { 
            scrollTrigger: {
                trigger: ".ftg-img-2",
                start:  "top bottom",
                end: "bottom top",
                toggleActions: "restart none restart none",
            },
            transform: 'rotate(10deg) translateX(-50px)',
            duration: 2
            }
        );
    })
    return(
    <FooterContainer className={`${darkMode} footer--container`} ref={ref}>
        <FooterTextContents>
            <FooterTextTitle data-sal="slide-up" data-sal-duration="1000" className="footer--text-title">
                Become one of the Etherian ones !
            </FooterTextTitle>
            <FooterParagraph data-sal="slide-up" data-sal-duration="1000" className="footer--paragraph">
                Lorem ipsum sectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. 
                Ut enim ad minim veniam, 
                quis nostrud exercitation
            </FooterParagraph>
            <FooterJoinUsGrid className="footer--joinUs--grid">
                <div className="animated--arrow">
                    <img src={arrowRight} alt="arrow-right" width="80"/>
                </div>
                <Link data-sal="slide-up" data-sal-duration="1000" to="/join-us"><button>Join us</button></Link>
            </FooterJoinUsGrid>
        </FooterTextContents>
        <div className="footer--group--image">
            <div className="ftg-img-1"><img src={staticdata.image[0].imageSrc} alt={staticdata.image[0].alt} /></div>
            <div className="ftg-img-2"><img src={staticdata.image[1].imageSrc} alt={staticdata.image[0].alt}/></div>
        </div>
    </FooterContainer>
    )
}

export default FooterWidget