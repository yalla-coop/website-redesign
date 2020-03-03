import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { H1, Link, P } from '../components/elements'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <P>Welcome to your new Yalla site.</P>
    <P>Now go build something great.</P>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
