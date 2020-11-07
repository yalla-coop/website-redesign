import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import * as S from './style'

const MemberCard = ({ image, name, description, key }) => {
  const { placeholder } = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "member-placeholder.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <S.CardWarapper key={key}>
      <S.ImageBackground
        fluid={image ? image.sharp.fluid : placeholder.sharp.fluid}
      />
      <S.Name>{name}</S.Name>
      <S.Descrip>{description}</S.Descrip>
    </S.CardWarapper>
  )
}

MemberCard.defaultProps = {
  image: {},
}
MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  image: PropTypes.objectOf(),
}
export default MemberCard
