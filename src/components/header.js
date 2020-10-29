import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ ...props }) => {
  const h1 = props.path == '/' ? '' : <AniLink className="c-header__title" cover bg="#FF209D" to='/'><h1>Jonathan Baines</h1></AniLink >;

  return (
    <header className="c-header">
      <div className="c-container">
        {h1}
        <div>
          <Nav visible={false}></Nav>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
