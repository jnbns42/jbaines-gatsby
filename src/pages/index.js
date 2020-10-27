import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../layouts/index"
import Img from "gatsby-image"
import SEO from "../components/seo"
import YAMLData from "../content/home.yaml"


const IndexPage = ({data}) => (
  <Layout>

      <SEO title="Home" />
      <div className="c-container">
        <div className="c-badge">
          <Img fluid={data.file.childImageSharp.fluid}  className="c-badge__img"/>
          <div className="c-badge__text">
            <h1>{YAMLData.title}</h1>
            <p>{YAMLData.intro}</p>
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "jb-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 480) {
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
