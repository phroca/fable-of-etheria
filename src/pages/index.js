import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useEffect} from "react";

import Layout from "../components/layout"
import SectionDiscover from "../components/section-discover/section-discover"
import SectionFaction from "../components/section-factions/section-factions"
import SectionIntro from "../components/section-introduction/section-introduction"
import Seo from "../components/seo"

import landingLoop from "../videos/landingLoop-desktop.mp4"
import SectionRoadmap from "../components/section-roadmap/section-roadmap";



const IndexPage = () => {

return(
  <Layout>
    <Seo title="Home" />
    <div className="hero--group">
      <div className="intro--bg">
        <div className="hero--bg--fit">
          <video src={landingLoop} playsInline={true} autoPlay={true} muted="muted" loop="loop" preload="auto" className="hero--bg--introVideo"></video>
        </div>
      </div>
      <div className="hero--content">
        <div className="hero--title">
        <h1>The Fable <br /> of <span >Etheria</span></h1>
        </div>
        <div className="hero--subtitle">
        <p>The Fable of Etheria is an NFT-powered community composed of 10000 uniquely rendered collectibles thet fight through the Ethereum blockchain</p>
        </div>
      </div>
    </div>
    <SectionDiscover
      titleLineOne="Discover the "
      numberNFT="10010"
      titleLineTwo="Etherias protagonists"
    />
    <SectionIntro />
    <SectionFaction />
    <SectionRoadmap />
  </Layout>
)
}

export default IndexPage
