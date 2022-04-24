import * as React from "react"
import { Link } from "gatsby"

import "./header.css"
import menuIcon from "../images/menu.svg"
import menuClose from "../images/close.svg"
import darkIcon from "../images/img-accueil/logo-sides/logo-bas-full.webp"
import lightIcon from "../images/img-accueil/logo-sides/logo-haut-full.webp"
import socialdata from "../../socialdata.json"
import imgFableOfEtheriaMini from "../images/img-accueil/foe-transparent.webp"
import imgFableOfEtheria from "../images/img-accueil/logo-transparent.webp"

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      hasScrolled: false,
      isMenuOpened: false
    }
    this.handleClickMenuClose = this.handleClickMenuClose.bind(this);
    this.handleClickMenuOpen = this.handleClickMenuOpen.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)

  }

  handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if(scrollTop > 50){
      this.setState({hasScrolled: true});
    } else {
      this.setState({hasScrolled: false});
    }
  }

  handleClickMenuOpen = () => {
    this.setState({isMenuOpened: true});
  }

  handleClickMenuClose = () => {
    this.setState({isMenuOpened: false});
  }

  render() {
    return(
      <div>
        <div className={`${this.state.isMenuOpened ? 'menu--enable': ''} menu--overlay`}>
          <div className="menu--container">
            <div className="menu--header">
              <Link to="/"><img src={imgFableOfEtheriaMini} height="27" width="27" /></Link>
              <img className="btn-menu-close" src={menuClose} height="27" width="27" onClick={this.handleClickMenuClose}/>
            </div>
            <div className="menu--links">
              <div className="menu--team">
                {socialdata.teamLink.map( sl => (
                    <a className="team--link" key={sl.id} href={sl.link}>{sl.title}</a>
                  ))}
              </div>
              
              <div className="menu--social--policies">
                <div className="menu--social">
                    {socialdata.socialLink.map( sl => (
                        <a className="social--link" key={sl.id} href={sl.link}>{sl.title}</a>
                    ))}
                </div>
                <div className="menu--policy">
                    {socialdata.privacyLink.map( sl => (
                        <a className="privacy--link" key={sl.id} href={sl.link}>{sl.title}</a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.hasScrolled ? 'header header-scrolled' : 'header'}>
          <div className="header-group">
          <Link to="/"><img src={imgFableOfEtheria} width="130" /></Link>
            <div className="nav-group-dark-light-mode" onClick={() => this.props.clickDarkLight()}>
              <div className="dark"><img height="30" width="30" src={darkIcon} /></div>
              <div className="switch-theme">
                <div className={this.props.darkMode ? 'interruptor dark-mode': 'interruptor light-mode'}></div>
              </div>
              <div className="light"><img height="30" width="30" src={lightIcon} /></div>
            </div>
            <div className="nav-group">
              <img className="btn-menu-open" src={menuIcon} onClick={this.handleClickMenuOpen}/>
            </div>
          </div>
        </div>
      </div>
    )
  }


}


export default Header
