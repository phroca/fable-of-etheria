import * as React from "react"
import styled from "styled-components"

import roadmap from "../../../roadmapdata.json"
import leftDoor from "../../images/roadmap/porte-gauche.webp"
import rightDoor from "../../images/roadmap/porte-droite.webp"
import couloir from "../../images/roadmap/couloir.webp"
// ffmpeg -i ./roadmap.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ./roadmap.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

import wall from "../../images/img-accueil/wall.webp"

const RoadmapContainer = styled.div`
    position: relative;
    z-index: 1;
    background: black;
    height: 56.5vw;
    /* height: 45vw; */
    /* margin-top: 100px;
    padding-top: 60px; */
    @media(max-width: 640px) {
        height: 56.5vw;
    }
`
const RoadmapDoors = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: auto auto;
    z-index: 3;
    @media(max-width: 640px) {
        margin-top: 100px;
    }
`
const RoadmapLeftDoor = styled.img`
    position: absolute;
    height: 56.5vw;
    /* height: 40vw;
    left: 14.5vw; */
    left:0;
    // left: 13vw;
`
const RoadmapRightDoor = styled.img`
    position: absolute;
    height: 56.5vw;
    /* height: 40vw;
    right: 14.5vw; */
    right: 0;
    // right:13vw;
`
const RoadmapCouloir = styled.img`
    position: absolute;
    height: 70vw;
    right:0;
    z-index: 2;
`
const Wall = styled.img`
    top: 0;
    position: absolute;
    z-index: 0;
    height: 45vw;
    width: 100%;
`
const SectionRoadmap = () => {

    return (
        <RoadmapContainer>
                {/* <Wall src={wall} /> */}
                <RoadmapDoors>
                    <RoadmapLeftDoor src={leftDoor} />
                    <RoadmapRightDoor src={rightDoor}/>
                </RoadmapDoors>
                {/* <RoadmapCouloir src={couloir}/> */}
        </RoadmapContainer>
    )

}

export default SectionRoadmap