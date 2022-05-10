import * as React from "react"
import styled from "styled-components"

import roadmap from "../../../roadmapdata.json"
import leftDoor from "../../images/roadmap/porte-gauche.webp"
import rightDoor from "../../images/roadmap/porte-droite.webp"
import couloir from "../../images/roadmap/couloir.webp"
// ffmpeg -i ./roadmap.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ./roadmap.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

const RoadmapContainer = styled.div`
    position: relative;
    z-index: 0;
    background: black;
    height: 50vw;
    @media(max-width: 640px) {
        height: 70vw;
    }
`
const RoadmapDoors = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: auto auto;
    z-index: 2;
    @media(max-width: 640px) {
        margin-top: 65px;
    }
`
const RoadmapLeftDoor = styled.img`
    position: absolute;
    height: 70vw;
    left:0;
    // left: 13vw;
`
const RoadmapRightDoor = styled.img`
    position: absolute;
    height: 70vw;
    right: 0;
    // right:13vw;
`
const RoadmapCouloir = styled.img`
    position: absolute;
    height: 70vw;
    right:0;
    z-index: 1;
`

const SectionRoadmap = () => {

    return (
        <RoadmapContainer>

                <RoadmapDoors>
                    <RoadmapLeftDoor src={leftDoor} />
                    <RoadmapRightDoor src={rightDoor}/>
                </RoadmapDoors>
                {/* <RoadmapCouloir src={couloir}/> */}
        </RoadmapContainer>
    )

}

export default SectionRoadmap