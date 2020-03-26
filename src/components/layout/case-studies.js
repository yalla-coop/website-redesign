import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { H1, H2 } from '../elements'
import Footer from './Footer'

import { GlobalStyle } from '../../utils'

const commonComponents = { Link, h1: H1, h2: H2 }

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <GlobalStyle />
      <H1>{mdx.frontmatter.title}</H1>
      <MDXProvider components={commonComponents}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <Footer />
    </>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.func.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query CaseStudyQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
