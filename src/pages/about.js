import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from 'react-markdown'
import Layout from "../layouts/index"
import SEO from "../components/seo"
import YAMLData from "../content/about.yaml"
 

const SecondPage = ({data, ...props}) => {  
  
  console.log(data);
  
  return (<Layout location={props.location}>
      <SEO title="About" />
      <div className="c-container c-container--column">
        <p className="c-about-intro">{YAMLData.intro}</p>
        
        <h2>Tech</h2>
        <p>Including but not necessarily limited to...</p>
        <div className="c-content">
          <ul className="c-technologies">
          {YAMLData.tech.map((data, index) => {
            return <li className="c-technologies__item">{data.item}</li>
          })}
          </ul>
        </div>

        <h2>Work History</h2>
        <p>My career in a nutshell...</p>
        <div className="c-content">
          <ul className="c-experience">
          {YAMLData.experience.map((data, index) => {
            return(<li className="c-experience__item">
              <h3>{data.item.company}</h3>
              <ReactMarkdown>{data.item.text}</ReactMarkdown>
              <a className='c-btn' href={data.item.url} target="_blank">Visit site</a>
            </li>)
          })}
          </ul>
        </div>

        
      </div> 
  </Layout>)
}

export default SecondPage