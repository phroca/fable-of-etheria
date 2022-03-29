import * as React from "react"
import {useRef, useEffect} from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./section-roadmap.css"
import roadmap from "../../../roadmapdata.json"

// ffmpeg -i ./roadmap.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ./roadmap.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

const SectionRoadmap = () => {
    gsap.registerPlugin(ScrollTrigger);
    const IntroVideoRef = useRef(null);
    const roadmapRef = useRef(null);
    useEffect(() => {
        

        /*initialise la video à 0 */

        ScrollTrigger.create({
            trigger: IntroVideoRef.current,
            scrub :true,
            pin: IntroVideoRef.current,
            anticipatePin: 1,
            start: "top top",
            end: "+=3000",
            /*markers: true,*/
        });

        /*gsap.fromTo(".container--roadmap--grid",
        {opacity: 0},
        {
            scrollTrigger:{
                trigger: ".container--roadmap--grid",
                scrub: true,
                start: "top bottom",
                end: "+=1000",
                markers: true
            },
            duration: 1,
            opacity: 1
        })*/

    }, [IntroVideoRef]);
    return (
        <div ref={IntroVideoRef} className="container--roadmap">
                <div ref={roadmapRef} className="container--roadmap--grid">
                    <div className="roadmap--head">
                        <div className="container--title">
                            This is our Roadmap
                            to bring the ecosystem
                        </div>
                        <div className="container--subtitle">
                            Lorem ipsum sectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim 
                            ad minim veniam, quis nostrud exercitation
                        </div>
                    </div>
                    <div className="roadmap--steps">
                        <div className="separator">
                            {roadmap.steps.map(step=>(
                                <div key={step.id} className="step--grid">
                                    <div className="title">{step.title}</div>
                                    <div className="content">{step.content}</div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
        </div>
    )

}

export default SectionRoadmap