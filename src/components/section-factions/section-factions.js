import * as React from "react"
import {useRef, useEffect} from "react";
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "gatsby"


import "./section-factions.css"
import arrow from "../../images/arrow-down.svg"
import staticdata from "../../../imgdata.json"


/*
img-1
transform: rotate(340deg) translateX(230px);

*/

const SectionFaction = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;

        gsap.fromTo(
            ".circle--fundation",
            {transform: 'translateX(200px)', opacity: 0}, { 
            scrollTrigger: {
                trigger: ".circle--fundation",
                start:  "top bottom",
                end: "bottom top",
                toggleActions: "play none none none",
            },
            transform: 'translateX(0)',
            opacity: 1,
            delay: 0.4,
            duration: 2
            }
        );

        gsap.fromTo(
            ".circle--alliance",
            {transform: 'translateX(-200px)', opacity: 0}, { 
            scrollTrigger: {
                trigger: ".circle--alliance",
                start:  "top bottom",
                end: "bottom top",
                toggleActions: "play none none none",
            },
            transform: 'translateX(0)',
            opacity: 1,
            delay: 0.4,
            duration: 2
            }
        );

        gsap.fromTo(
            ".gi-img-1",
            {transform: 'translateX(230px)'}, { 
            scrollTrigger: {
                trigger: ".gi-img-1",
                start:  "top bottom",
                end: "bottom top",
                toggleActions: "restart none restart none",
            },
            transform: 'rotate(340deg) translateX(100px) translateY(40px)',
            duration: 2
            }
        );

        gsap.to(".gi-img-2",
            {
            scrollTrigger: {
                trigger: ".gi-img-2",
                start:  "top bottom",
                end: "bottom top",
                toggleActions: "restart none restart none",
            },
            transform: 'rotate(360deg)',
            duration: 2
        });

        gsap.fromTo(
            ".gi-img-3",
            {transform: 'translateX(-230px)'}, { 
            scrollTrigger: {
                trigger: ".gi-img-3",
                start:  "top bottom",
                end: "bottom top",
                toggleActions: "restart none restart none",
            },
            transform: 'rotate(20deg) translateX(-100px) translateY(40px)',
            duration: 2
            }
        );
    });

 

    return(
    <div className="container--factions" ref={ref}>
        <div className="container--factions--content">
            <div className="container--factions--header">
                <div className="animated--arrow">
                    <img src={arrow} />
                </div>
                <div data-sal="slide-up" data-sal-duration="1000" className="faction--title">
                    Lorem ipsum loreth sulfiundguiltas estem
                </div>
                <div data-sal="slide-up" data-sal-duration="1000" className="faction--subtitle">
                    quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                <Link data-sal="slide-up" data-sal-duration="1000" to="/collection"><button>View All</button></Link>
                <div className="group--image">
                    <div className="gi-img-1"><img src={staticdata.image[0].imageSrc} /></div>
                    <div className="gi-img-2"><img src={staticdata.image[1].imageSrc} /></div>
                    <div className="gi-img-3"><img src={staticdata.image[2].imageSrc} /></div>
                </div>
            </div>
            
            <div className="container--factions--cta">
                <div data-sal="slide-up" data-sal-duration="1000" className="cta--title">
                    We all share two
                    differents sides for 
                    the properties
                </div>
                <Link data-sal="slide-up" data-sal-duration="1000" to="/collection"><button>View All</button></Link>
            </div>
            <div className="container--factions--circles">
                <div className="circle--fundation">
                    <div className="fundation--title">Fondation</div>
                    <div className="fundation--text">Lorem ipsum sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                </div>
                <div className="circle--alliance">
                    <div className="alliance--title">Alliance</div>
                    <div className="alliance--text">Lorem ipsum sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                </div>
            </div>
            <div className="container--factions--footer">
                <div data-sal="slide-up" data-sal-duration="1000" className="faction--subtitle">
                We’ve been quietly making a name for ourselves on the Ethereum blockchain and there will be 3,500 of us to collect.
                </div>
                <div className="animated--arrow">
                    <img src={arrow} />
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default SectionFaction