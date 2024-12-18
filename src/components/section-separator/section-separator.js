import * as React from "react"
import styled from "styled-components"


const SeparatorContainer = styled.div`
    background: black;
    height: 100px;
    display: grid;
    align-items: center;
    @media(max-width: 640px) {
        height: 65px;
    }
`

const SeparatorText = styled.div`
    overflow: hidden;
    max-width: 100%
`

const SeparatorMarquee = styled.div`
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: marquee 15s linear infinite;
    span {
        font-family: "Orbitron-Regular";
        font-size: 30px;
        color: white;
        text-transform: uppercase;
        display: inline-block;
    }

    @keyframes marquee {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-50%, 0, 0); 
        }
    }
`

const SectionSeparator = () => {
    return (
        <SeparatorContainer>
            <SeparatorText>
                <SeparatorMarquee>
                    <span>Breaking news ! Breaking news !&nbsp;</span>
                    <span>Breaking news ! Breaking news !&nbsp;</span>
                    <span>Breaking news ! Breaking news !&nbsp;</span>
                    <span>Breaking news ! Breaking news !&nbsp;</span>
                    <span>Breaking news ! Breaking news !&nbsp;</span>
                    <span>Breaking news ! Breaking news !&nbsp;</span>
                    <span>Breaking news ! Breaking news !&nbsp;</span>
                    <span>Breaking news ! Breaking news !&nbsp;</span>
                </SeparatorMarquee>
            </SeparatorText>
        </SeparatorContainer>
    )
}

export default SectionSeparator