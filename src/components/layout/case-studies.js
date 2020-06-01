import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MP, H2, H3 } from '../elements'
import Footer from './Footer'
import { GlobalStyle, colors } from '../../utils'

const H2Modifier = styled(H2)`
  color: ${colors.black};
`

const H3Modifier = styled(H3)`
  color: ${colors.primary};
`

const commonComponents = {
  p: MP,
  h2: H2Modifier,
  h3: H3Modifier,
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
