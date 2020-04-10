import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MP } from '../elements'
import Footer from './Footer'
import { GlobalStyle } from '../../utils'

const commonComponents = {
  p: MP,
}

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <GlobalStyle />
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
