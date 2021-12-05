import * as React from "react"
import {useRef, useEffect} from "react";
import styled from "styled-components"
import { Link } from "gatsby"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import "./section-introduction.css"

import staticdata from "../../../imgdata.json"

const SectionGroup = styled.div`
    position: relative;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    height: 1400px;
`
const SectionHeading = styled.div`
    padding: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;

`
const SectionSubtitle = styled.div`
    color: white;
    font-size: 18px;
    font-weight: 200;
    max-width: 450px;
    align-self: end;
`

const SectionAbout = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 200px;
    max-width: 430px;
`

const SubHeadOne = styled.div`
    font-size: 60px;
`

const SubHeadTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    button{
        width: 150px;
        height: 140px;
        outline: none;
        border-radius: 100%;
        border: none;
        background: linear-gradient(45deg, #002884, #78002E);
        color: white;
        font-family: inherit;
        font-size: 20px;
        cursor: pointer
    }
    div {
        font-size: 60px;
    }

    div span{
        background: linear-gradient(45deg, #002884, #78002E);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const SectionGroupImage = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 50px;
img{
    width: 250px;
    height: 300px;
    margin: 0 20px;
}
`

const SectionIntro = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() =>{
        gsap.fromTo(".sig-img-1",
        {opacity:0},{    
            scrollTrigger: {
                trigger: ".sig-img-1",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none none",
                
            },
            opacity:1,
            duration: 1.5,
        });

        gsap.fromTo(".sig-img-2",
        {opacity:0},{    
            scrollTrigger: {
                trigger: ".sig-img-2",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none none", 
            },
            opacity:1,
            duration: 1.5,
        });

        gsap.fromTo(".sig-img-3",
        {opacity:0},{    
            scrollTrigger: {
                trigger: ".sig-img-3",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none none",
            },
            opacity:1,
            duration: 1.5,
        });
    });

    return(
        <SectionGroup className="section-intro" ref={ref}>
            <SectionHeading>
                <SectionSubtitle data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200" className="section-intro--subtitle">
                It is said here that our destiny is played out at birth. The people of the upper town known as the upside are for the sole purpose of integrating and serving the interests of the foundation. In the lower town that we call downtown, everything is toxic fumes and dust here enslaved by the foundation.
                </SectionSubtitle>
                <SectionAbout className="section-intro--about">
                    <SubHeadOne data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200" className="introduce--subtitle-1">Allow us to</SubHeadOne>
                    <SubHeadTwo>
                    <Link to="/about-us"><button>About us</button></Link>
                    <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" className="introduce--subtitle-2">
                        <span>introduce</span><br />
                        ourselves
                    </div>
                    </SubHeadTwo>
                </SectionAbout>
            </SectionHeading>
            <SectionGroupImage className="section-intro--groupImage" >
                <div className="sig-img-1"><img src={staticdata.image[0].imageSrc} /></div>
                <div className="sig-img-2"><img src={staticdata.image[1].imageSrc} /></div>
                <div className="sig-img-3"><img src={staticdata.image[2].imageSrc} /></div>
            </SectionGroupImage>
        </SectionGroup>
    )
}

export default SectionIntro