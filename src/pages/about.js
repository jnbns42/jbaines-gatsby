import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import PageTransition from 'gatsby-plugin-page-transitions';

const SecondPage = () => (
  <Layout>
      <SEO title="About" />
      <div className="c-content">
        <h1>About</h1>
        <h2>I've been working as a developer for nearly 10 years. I've worked on a variety of projects over the years, including from large ecommerce projects to Google Chrome extensions.</h2>
        <div className="c-content__body">
          <ul className="c-experience">
            <li>
              <h3>McCann Manchester</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque congue nunc eu pharetra. Integer convallis lobortis lorem et rhoncus. Integer tincidunt tristique nisl a cursus. Donec eget nisl facilisis, consequat dui vel, aliquam augue. Nunc nec mauris porttitor, semper lorem eu, auctor justo. Proin et mollis mauris.</p>
            </li>
            <li>
              <h3>The Fragrance Shop</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque congue nunc eu pharetra. Integer convallis lobortis lorem et rhoncus. Integer tincidunt tristique nisl a cursus. Donec eget nisl facilisis, consequat dui vel, aliquam augue. Nunc nec mauris porttitor, semper lorem eu, auctor justo. Proin et mollis mauris.</p>
            </li>
            <li>
              <h3>ADZ Media</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque congue nunc eu pharetra. Integer convallis lobortis lorem et rhoncus. Integer tincidunt tristique nisl a cursus. Donec eget nisl facilisis, consequat dui vel, aliquam augue. Nunc nec mauris porttitor, semper lorem eu, auctor justo. Proin et mollis mauris.</p>
            </li>
            <li>
              <h3>MMP Global</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque congue nunc eu pharetra. Integer convallis lobortis lorem et rhoncus. Integer tincidunt tristique nisl a cursus. Donec eget nisl facilisis, consequat dui vel, aliquam augue. Nunc nec mauris porttitor, semper lorem eu, auctor justo. Proin et mollis mauris.</p>
            </li>
            <li>
              <h3>Venditan</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque congue nunc eu pharetra. Integer convallis lobortis lorem et rhoncus. Integer tincidunt tristique nisl a cursus. Donec eget nisl facilisis, consequat dui vel, aliquam augue. Nunc nec mauris porttitor, semper lorem eu, auctor justo. Proin et mollis mauris.</p>
            </li>
          </ul>
        </div>
      </div>
  </Layout>
)

export default SecondPage
