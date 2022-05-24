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

  handleClickDarkLight = () =>{
    this.setState({isDarkMode: !this.state.isDarkMode});
  }

  render() {
    const {children} = this.props;
    return(
      <>
        <Header darkMode={this.state.isDarkMode} clickDarkLight={this.handleClickDarkLight}/>
        <div>
          <main className={this.state.isDarkMode ? 'dark-mode': 'light-mode'}>{children}</main>
          {/* <FooterWidget darkMode={this.state.isDarkMode ? 'dark-mode': 'light-mode'} /> */}
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
