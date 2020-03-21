import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { H1, Link, SP } from '../components/elements'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <SP>Welcome to your new Yalla site.</SP>
    <SP>Now go build something great.</SP>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image fileName="gatsby-astronaut" altText="gatsby default image" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
