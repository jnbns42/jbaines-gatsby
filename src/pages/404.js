import React from "react"

import Layout from "../layouts/index"
import SEO from "../components/seo"

const NotFoundPage = ({...props}) => (
  <Layout location={props.location}>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
