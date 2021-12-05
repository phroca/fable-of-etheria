import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"
import FooterWidget from "../components/footer-widget/footer-widget";
import Footer from "../components/footer-widget/footer/footer";
import discord from "../images/discord.png";
class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isDarkMode: true
    }
  }

  handleClickDark = () =>{
    this.setState({isDarkMode: true})
  }

  handleClickLight = () =>{
    this.setState({isDarkMode: false})
  }

  render() {
    const {children} = this.props;
    return(
      <>
        <Header darkMode={this.state.isDarkMode} clickDark={this.handleClickDark} clickLight={this.handleClickLight}/>
        <div>
          <Link to="#" className="foe--discord">
            <button>
              <img height="120" width="120" src={discord} alt="discord" />
            </button>
          </Link>
          <main className={this.state.isDarkMode ? 'dark-mode': 'light-mode'}>{children}</main>
          <FooterWidget darkMode={this.state.isDarkMode ? 'dark-mode': 'light-mode'} />
          <Footer darkMode={this.state.isDarkMode ? 'dark-mode': 'light-mode'}/>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
