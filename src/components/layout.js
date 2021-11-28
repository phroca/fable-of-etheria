/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
          <main className={this.state.isDarkMode ? 'dark-mode': 'light-mode'}>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
