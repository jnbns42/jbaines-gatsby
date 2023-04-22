import React from "react"

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
            <ul className="c-technologies">
            {YAMLData.projects.map((data, index) => {
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

export default WorkPage;