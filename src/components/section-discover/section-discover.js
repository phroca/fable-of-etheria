import * as React from "react"
import styled from "styled-components"

import "./section-discover.css"

import arrowLeft from "../../images/arrow-left.svg"
import arrowRight from "../../images/arrow-right.svg"

import staticdata from "../../../imgdata.json"

const SectionGroup = styled.div`
    position: relative;
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    height: 900px;
`

const SectionHeading = styled.div`
    padding: 150px 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;

`

const SectionSubtitle = styled.div`
    color: white;
    font-size: 40px;
`
const SectionSubtitleOne = styled.h2`
    margin: 0 auto;
    font-weight: normal;
    span{
        background: linear-gradient(45deg, #002884, #78002E);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
const SectionSubtitleTwo = styled.h2`
    margin: 0 0px 0 120px;
    font-weight: normal;

`
const SectionArrows = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-gap: 20px;
    align-content: end;
`

const SectionGroupImage = styled.div`
margin:50px 0;
img{
    width: 250px;
    height: 300px;
    margin: 0 20px;
}
`
const SectionDiscover = props => (
    <SectionGroup className="section-discover">
        <SectionHeading>
            <SectionSubtitle className="section-discover--subtitle">
                <SectionSubtitleOne data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">{props.titleLineOne} <span>{props.numberNFT}</span></SectionSubtitleOne>
                <SectionSubtitleTwo data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">{props.titleLineTwo}</SectionSubtitleTwo>
            </SectionSubtitle>
            <SectionArrows>
                <div className="slider-navigation prev-side">
                    <div className="wrapper-icon-left">
                        <img src={arrowLeft} />
                    </div>
                </div>
                <div className="slider-navigation next-side">
                    <div className="wrapper-icon-right">
                        <img src={arrowRight} />
                    </div>
                </div>
            </SectionArrows>
        </SectionHeading>
        <SectionGroupImage>
            {staticdata.image.map(img => (
                <img key={img.id} src={img.imageSrc} />
            ))}
        </SectionGroupImage>
    </SectionGroup>
)
export default SectionDiscover