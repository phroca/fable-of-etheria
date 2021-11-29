import * as React from "react"
import {useRef, useEffect} from "react";
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "gatsby"


import "./section-factions.css"
import arrow from "../../images/arrow-down.svg"
import staticdata from "../../../imgdata.json"



const SectionFaction = () => {
    // gsap.registerPlugin(ScrollTrigger);
    // const ref = useRef(null);
    // useEffect(() => {
    //     const element = ref.current;
    //     gsap.fromTo(
    //         ".container--factions--content",
    //         {clipPath: 'circle(0% at 50% 50%)'}, {clipPath: 'circle(100% at 50% 50%)', 
    //         scrollTrigger: {
    //             trigger: ".container--factions--content",
    //             start:  "top 70%",
    //             end: "10% 30%",
    //             scrub: true,
    //             markers: true
    //         }}
    //     );
    // }, [])

    return(
    <div className="container--factions">
        <div className="container--factions--content">
            <div className="container--factions--header">
                <div className="animated--arrow">
                    <img src={arrow} />
                </div>
                <div className="faction--title">
                    Lorem ipsum loreth sulfiundguiltas estem
                </div>
                <div className="faction--subtitle">
                    quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                <Link to="/collection"><button>View All</button></Link>
                <div class="group--image">
                    <div className="img-1"><img src={staticdata.image[0].imageSrc} /></div>
                    <div className="img-2"><img src={staticdata.image[1].imageSrc} /></div>
                    <div className="img-3"><img src={staticdata.image[2].imageSrc} /></div>
                </div>
            </div>
            
            <div className="container--factions--cta">
                <div className="cta--title">
                    We all share two
                    differents sides for 
                    the properties
                </div>
                <Link to="/collection"><button>View All</button></Link>
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
                <div className="faction--subtitle">
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