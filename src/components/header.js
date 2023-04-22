import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav";

const Header = ({ ...props }) => {
  const h1 = props.path == '/' ? '' : <a class="c-header__title" href="/"><h1>Jonathan Baines</h1></a>;

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
