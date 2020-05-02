import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Logo from '../../../../static/svg/yalla-logo.svg'
import LogoBlack from '../../../../static/svg/yall-logo-black.svg'

const MenuContainer = styled.div`
  cursor: pointer;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`
const NavContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`

const Img = styled.img`
  width: 6rem;
  height: 6rem;
`

const Span = styled.span`
  position: relative;
  margin-top: 3.5rem;
  &,
  &:after,
  &:before {
    mix-blend-mode: difference;
    width: 3rem;
    height: 2px;
    background-color: ${props =>
      props.menuColor === 'white' ? '#FFF' : '#000'};
    display: inline-block;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &:after {
    top: 0.8rem;
  }

  &:before {
    top: -0.8rem;
  }
`
const LogoContainer = styled(MenuContainer)``

const Navbar = ({ menuColor, logoColor }) => (
  <NavContainer>
    <Nav>
      <Link to="/">
        <LogoContainer>
          {logoColor === 'black' ? (
            <Img src={LogoBlack} alt="yalla-logo" />
          ) : (
            <Img src={Logo} alt="yalla-logo" />
          )}
        </LogoContainer>
      </Link>
      <MenuContainer>
        <Span menuColor={menuColor}>&nbsp;</Span>
      </MenuContainer>
    </Nav>
  </NavContainer>
)

Navbar.propTypes = {
  menuColor: PropTypes.string.isRequired,
  logoColor: PropTypes.string.isRequired,
}

export default Navbar
