import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Blob from "../components/blob"
import YAMLData from "../content/home.yaml"


const IndexPage = ({data, ...props}) => {
  console.log(props);
  return(<Layout location={props.location}>
      <SEO title="Home" />
      <div className="c-container c-container--home">
        <div className="c-badge">
          <div className="c-badge__img-container">
            <Img fluid={data.file.childImageSharp.fluid}  className="c-badge__img"/>
          </div>
          <div className="c-badge__text">
            <h1>{YAMLData.title}</h1>
            <p>{YAMLData.intro}</p>
          </div>
        </div>
      </div>
      <svg  width="0" height="0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="mask">
        <path fill="#FF0066" d="M55,-43.9C70.5,-24.3,81.9,-1.5,79.2,21.1C76.4,43.7,59.5,66.1,37.9,75.2C16.3,84.3,-10.1,80,-30.8,68.3C-51.4,56.7,-66.4,37.6,-69.9,17.4C-73.4,-2.9,-65.5,-24.4,-51.9,-43.5C-38.3,-62.7,-19.2,-79.6,0.3,-79.8C19.7,-80,39.4,-63.6,55,-43.9Z" transform="translate(100 100)" />        </clipPath>
      </svg>
  </Layout>)
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "jb-1.jpg" }) {
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
