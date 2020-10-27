/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "../scss/style.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
            {children}
        </main>
        <footer>
          <div>
            <p>&copy; Jonathan Baines 2020</p>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
