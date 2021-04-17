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
import Blob from "../components/blob"
import "../scss/style.scss"


const Layout = ({ children, location}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "kenobi.png" }) {
        publicURL
      }
      allSitePage {
        pageInfo {
          currentPage
        }
      }
    }
  `)


  
  useEffect(() => {
    console.log('%c ', 'font-size:400px; background:url("'+ window.location.protocol+ '//' + window.location.hostname.replace(/\/$/, "") + data.file.publicURL +'"); background-repeat: no-repeat; background-size: 58px 128px; font-size: 128px');
    console.log('%c%s', 'color: #fcba03; font-size: 28px;','Hello there!');
    console.log('%c%s', 'color: #fcba03; font-size: 14px;','If you are curious, this site is built with Gatsby.');
    console.log('%c%s', 'color: #fcba03; font-size: 14px;','This site only exists to justify my domain name purchase in all honesty ¯¯\\_(ツ)_/¯¯');
    console.log('%c%s', 'color: #fcba03; font-size: 14px;','And to serve as a bit of a playground...');
    console.log('%c%s', 'color: #fcba03; font-size: 14px;','Hit me up on LinkedIn if you want to reach out!');



  }, []);

  return (
    <>
      <Blob/>

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