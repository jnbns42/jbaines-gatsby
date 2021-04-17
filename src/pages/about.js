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
        <div className="c-content">
          <ul className="c-technologies">
          {YAMLData.tech.map((data, index) => {
            return <li className="c-technologies__item">{data.item}</li>
          })}
          </ul>
        </div>

        <h2>Work History</h2>
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

        <h2>Games</h2>
        <p>All work and no play makes Jonathan a dull boy. Here's what I've been playing recently.</p>
        <div className="c-content">
          <ul className="c-games">
          {data.allSteamGame.nodes.map((node, index) => {
            const total = node.playtime_forever / 60;
            const twoweeks = node.playtime_2weeks / 60;
            return(<li className="c-games__item">
              <img src={`https://media.steampowered.com/steamcommunity/public/images/apps/${node.steamId}/${node.img_logo_url}.jpg`} alt=""/>
              <span>
                <strong>Last two weeks:</strong> {twoweeks.toFixed(1)} hrs
                <br/>
                <strong>All time:</strong> {total.toFixed(1)}  hrs
              </span>
            </li>)
          })}
          </ul>
        </div>
      </div> 
  </Layout>)
}

export default SecondPage

export const query = graphql`
  query {
    allSteamGame {
      nodes {
        name
        playtime_forever
        playtime_2weeks
        steamId
        img_logo_url
        img_icon_url
      }
    }
  }`