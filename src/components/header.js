import * as React from "react"
import { Link } from "gatsby"

import "./header.css"
import menuIcon from "../images/menu.svg"

import darkIcon from "../images/dark-theme.svg"
import lightIcon from "../images/light-theme.svg"

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      hasScrolled: false
    }
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


  render() {
    return(
      <div>
        <div className={this.state.hasScrolled ? 'header header-scrolled' : 'header'}>
          <div className="header-group">
            <Link to="/"> The fable of Etheria</Link>
            <div className="nav-group-dark-light-mode">
              <div className="dark" onClick={() => this.props.clickDark()}><img src={darkIcon} /></div>
              <div className="switch-theme">
                <div className={this.props.darkMode ? 'interruptor dark-mode': 'interruptor light-mode'}></div>
              </div>
              <div className="light" onClick={() => this.props.clickLight()}><img src={lightIcon} /></div>
            </div>
            <div className="nav-group">
              <div><span>Smart Contract</span></div>
              <img className="btn-menu" src={menuIcon}/>
            </div>
          </div>
        </div>
      </div>



    )
  }


}


export default Header
