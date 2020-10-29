import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import PageTransition from 'gatsby-plugin-page-transitions';

const SecondPage = ({...props}) => (
  <Layout location={props.location}>
      <SEO title="About" />
      <div className="c-content">
        <h1>Contact</h1>
        <h2>You can contact me via the links below</h2>
        <div className="c-content__body">
          <a>LinkedIn</a>
        </div>
      </div>
  </Layout>
)

export default SecondPage
