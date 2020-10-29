import React from "react"
import ReactMarkdown from 'react-markdown'
import Layout from "../layouts/index"
import SEO from "../components/seo"
import YAMLData from "../content/about.yaml"


const SecondPage = ({...props}) => {
  console.log(props);
  
  return (<Layout location={props.location}>
      <SEO title="About" />
      <div className="c-container">
        <h1>About</h1>
        <h2>{YAMLData.intro}</h2>
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
