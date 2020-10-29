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
import Footer from "../components/footer"
import "../scss/style.scss"


const Layout = ({ children, location}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage {
        pageInfo {
          currentPage
        }
      }
    }
  `)

  const [scrolled, setScrolled] = useState(true);
  const onScroll = () => {
    document.body.style = `background-position: 0% -${window.pageYOffset/3.5}px`;
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(!scrolled);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <Header path={location.pathname} siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
            {children}
        </main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
 