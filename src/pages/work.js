import React from "react"
import { graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import YAMLData from "../content/work.yaml"
import ReactMarkdown from 'react-markdown'

const WorkPage = ({data, ...props}) => {  
    return (<Layout location={props.location}>
        <SEO title="Work" />
        <div className="c-container c-container--column">        
          <h2>Work</h2>
          <p>Some of the projects I've been involved with...</p>
          <div className="c-content">
            <ul className="c-work">
            {YAMLData.projects.map((project, index) => {
              const image = data.allImageSharp.nodes.filter(obj => obj.fluid.originalName.toLowerCase() == project.item.imageName.toLowerCase())
              return(<li key={index} className="c-work__item">
                <h3>{project.item.company}</h3>
                <img src={image[0].fluid.src} alt={`${project.item.company} screenshot`}  className="c-work__item__image" />

                <div>
                    <ReactMarkdown>{project.item.text}</ReactMarkdown>
                </div>
                <a className='c-btn' href={project.item.url} target="_blank">View project</a>
                </li>
              )
            })}
            </ul>
          </div>
        </div> 
    </Layout>)
}

export default WorkPage;

export const query = graphql`
query MyQuery {
  allImageSharp {
    nodes {
      fluid {
        src
        originalName
      }
    }
  }
}`