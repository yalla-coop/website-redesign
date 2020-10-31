import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ fileName, altText, style }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n =>
    n.node.relativePath.includes(fileName),
  )

  return image ? (
    <Img fluid={image.node.childImageSharp.fluid} alt={altText} style={style} />
  ) : (
    'Image does not exist'
  )
}

Image.defaultProps = {
  style: null,
}
Image.propTypes = {
  altText: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  style: PropTypes.shape(),
}

export default Image
