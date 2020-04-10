// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'
// import styled, { css } from 'styled-components'
// import Navbar from '../../src/components/layout/Header/Nav'

// const ImageBackground = styled(BackgroundImage)`
//   background-image: url('../../../src/images/earwig-header.png') no-repeat;
//   background-size: cover;
//   height: 100vh;
//   max-width: 100%;
//   position: relative;
// `

// const Header = () => {
//   const { image } = useStaticQuery(graphql`
//     query {
//       image: file(relativePath: { eq: "earwig-header.png" }) {
//         sharp: childImageSharp {
//           fluid {
//             ...GatsbyImageSHarpFluid
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div
//       css={css`
//         height: 100vh;
//       `}
//     >
//       <ImageBackground tag="section" fluid={image.sharp.fluid} />
//       <Navbar logoColor="black" menuColor="black" />
//     </div>
//   )
// }

// export default Header
