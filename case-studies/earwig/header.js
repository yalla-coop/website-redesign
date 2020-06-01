import React from 'react'
import styled from 'styled-components'
import Image from '../../src/components/image'
import Navbar from '../../src/components/layout/Header/Nav'

const BackgroundImage = styled(Image)`
  background-image: url('../../src/images/earwig-header.png') no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100%;
  position: relative;
`

const Header = () => (
  <div>
    <BackgroundImage fileName="earwig-header" altText="earwig wire frames" />
    <Navbar logoColor="black" menuColor="#000" />
  </div>
)

export default Header
