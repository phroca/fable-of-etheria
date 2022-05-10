import * as React from "react"
import styled from "styled-components"


const SeparatorContainer = styled.div`
    background: black;
    height: 100px;
    display: grid;
    align-items: center;
    animation: warning-color 2s linear infinite;
    z-index: 10;
    position: absolute;
    @keyframes warning-color{
        0%, 100%{
            background: black;
        }
        50%{
            background: red;
        }
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

const SectionSeparatorWarning = () => {
    return (
        <SeparatorContainer>
            <SeparatorText>
                <SeparatorMarquee>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                    <span>Warning ! Warning ! Warning !&nbsp;</span>
                </SeparatorMarquee>
            </SeparatorText>
        </SeparatorContainer>
    )
}

export default SectionSeparatorWarning