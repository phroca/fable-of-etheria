import * as React from "react"

import Layout from "../components/layout"
import SectionDiscover from "../components/section-discover/section-discover"
import SectionFaction from "../components/section-factions/section-factions"
import SectionIntro from "../components/section-introduction/section-introduction"
import Seo from "../components/seo"
import cristal1 from "../images/img-accueil/crystaux flotants/crystal bleu 1.png"
import cristal2 from "../images/img-accueil/crystaux flotants/crystal jaune 3.png"
import cristal3 from "../images/img-accueil/crystaux flotants/crystal orange 2.png"
import cristal4 from "../images/img-accueil/crystaux flotants/crystal bleu 3.png"
import cristal5 from "../images/img-accueil/crystaux flotants/crystal vert 2.png"
import cristal6 from "../images/img-accueil/crystaux flotants/crystal violet 2.png"
import cristal7 from "../images/img-accueil/crystaux flotants/crystal orange 4.png"

import PersoDroiteCorps from "../images/img-accueil/hero-persos/perso droite/corp droite.png"
import PersoDroiteTete from "../images/img-accueil/hero-persos/perso droite/tete droite.png"
import PersoDroitemain from "../images/img-accueil/hero-persos/perso droite/main droite.png"

import PersoGaucheCorps from "../images/img-accueil/hero-persos/perso gauche/corp gauche.png"
import PersoGaucheTete from "../images/img-accueil/hero-persos/perso gauche/tete gauche.png"
import PersoGauchemain from "../images/img-accueil/hero-persos/perso gauche/main gauche.png"

import cristalCentre from "../images/img-accueil/crystaux flotants/crystal bleu 4.png"
import SectionRoadmap from "../components/section-roadmap/section-roadmap";
import SectionSeparator from "../components/section-separator/section-separator"
import SectionPresentation from "../components/section-presentation/section-presentation"
import SectionSeparatorWarning from "../components/section-separator-warning/section-separator-warning"



const IndexPage = () => {

return(
  <Layout>
    <Seo title="Home" />
    <div className="hero--group">
      <div className="intro--bg">
        <div className="hero--bg--fit">
          <img src="data:image/png;base64,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" alt="" />
          <img class="floating-item item-1" src={cristal1} alt=""></img>
          <img class="floating-item item-2" src={cristal2} alt=""></img>
          <img class="floating-item item-3" src={cristal3} alt=""></img>
          <img class="floating-item item-4" src={cristal4} alt=""></img>
          <img class="floating-item item-5" src={cristal5} alt=""></img>
          <img class="floating-item item-6" src={cristal6} alt=""></img>
          <img class="floating-item item-7" src={cristal7} alt=""></img>
          <div className="hero--persos-droite">
            <div className="hero--persos-droite-container">
              <img class="hero--persos-droite--corps" src={PersoDroiteCorps} alt=""></img>
              <img class="hero--persos-droite--tete" src={PersoDroiteTete} alt=""></img>
              <img class="hero--persos-droite--main" src={PersoDroitemain} alt=""></img>
            </div>
          </div>
          <div className="hero--persos-gauche">
            <div className="hero--persos-gauche-container">
              <img class="hero--persos-gauche--corps" src={PersoGaucheCorps} alt=""></img>
              <img class="hero--persos-gauche--tete" src={PersoGaucheTete} alt=""></img>
              <img class="hero--persos-gauche--main" src={PersoGauchemain} alt=""></img>
            </div>
          </div>
          <div class="light-cristal"></div>
          <div className="hero--cristal-centre">
            <img class="hero--cristal-centre-pos" src={cristalCentre} alt=""></img>
          </div>
        </div>
      </div>
    </div>
    <SectionSeparator />
    <SectionPresentation />
    <SectionDiscover />
    <SectionSeparatorWarning />
    <SectionIntro />
    <SectionFaction />
    <SectionRoadmap />
  </Layout>
)
}

export default IndexPage
