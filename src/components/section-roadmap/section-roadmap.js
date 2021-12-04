import * as React from "react"
import {useRef, useEffect} from "react";
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import roadmap from "../../videos/roadmap.mp4"
import testvideo from "../../videos/output.mp4"
import "./section-roadmap.css"

// ffmpeg -i ./roadmap.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ./roadmap.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

const SectionRoadmap = () => {
    
    const IntroVideoRef = useRef(null);
    const videoRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        /*initialise la video à 0 */
        videoRef.current.currentTime = 0;

        ScrollTrigger.create({
            trigger: IntroVideoRef.current,
            scrub :true,
            pin: IntroVideoRef.current,
            anticipatePin: 1,
            start: "top top",
            end: "+=3000",
            /*markers: true,*/
            onUpdate: (self)=> {
                if(videoRef.current) {
                    let scrollPos = self.progress;      
                    let videoDuration = videoRef.current.duration;
                    let videoCurrentTime = videoDuration * scrollPos;
                    if(videoCurrentTime) {
                        videoRef.current.currentTime = videoCurrentTime;
                    }
                }
            }
        })
    }, [videoRef, IntroVideoRef]);

    return (
        <div ref={IntroVideoRef} className="container--roadmap">
            <video ref={videoRef} src={testvideo}  playsInline={true} muted="muted" preload="auto" className="container--roadmap--video"></video>
        </div>
    )

}

export default SectionRoadmap