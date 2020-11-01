/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            author
            defaultImage: image
            siteUrl: url
          }
        }
      }
    `,
  )

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
    author,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate="%s | Yalla"
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:image',
          content: seo.image,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: seo.title,
        },
        {
          name: 'twitter:description',
          content: seo.description,
        },
        {
          name: 'twitter:image',
          content: seo.image,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  image: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
