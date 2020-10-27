import PropTypes from "prop-types"
import React, {useEffect, useState} from "react"
import Nav from "./nav";

const Header = ({ siteTitle }) => {

  const [scrolled, setScrolled] = useState(true);
  const onScroll = () => {

    console.log(window.pageYOffset);
    document.body.style = `background-position: 0% -${window.pageYOffset/1.5}px`;

    const isScrolled = window.scrollY > 10;
    if (isScrolled !== scrolled) {
      setScrolled(!scrolled);
    }
  };
  
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => {
      console.log("Cleaned up");
      window.removeEventListener("scroll", onScroll);
    };
  }); 
  
  return (
    <header>
      <div>
        <Nav visible={false}></Nav>
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
