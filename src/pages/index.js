import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import Img from "gatsby-image"
import SEO from "../components/seo"
import YAMLData from "../content/home.yaml"


const IndexPage = ({data, ...props}) => {
  console.log(props);
  return(<Layout location={props.location}>
      <SEO title="Home" />
      <div className="c-container c-container--home">
        <div className="c-badge">
          <div className="c-badge__monitor">
            <Img fluid={data.file.childImageSharp.fluid}  className="c-badge__monitor__img"/>
            <div className="c-badge__monitor__text">
              <span>const home = () =&gt;  &#123;</span>
              <span>&nbsp;&nbsp;&nbsp;console.log("Hello!");</span>
              <span>&#125;</span>
            </div>
          </div>
          <div className="c-badge__text">
            <h1>{YAMLData.title}</h1>
            <p>{YAMLData.intro}</p>
          </div>
        </div>
      </div>
  </Layout>)
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "monitor.png" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
