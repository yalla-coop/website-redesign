import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Logo from '../../../../static/svg/yalla-logo.svg'
import LogoBlack from '../../../../static/svg/yall-logo-black.svg'
import { Wrapper as ContentWrapper } from '../../contentWrapper'
import { breakpoints, spacings } from '../../../utils'

const MenuLink = styled(Link)`
  cursor: pointer;
  ${breakpoints.laptopLarge} {
    padding-top: ${spacings[3]};
    padding-right: ${spacings[3]};
  }
`

const Nav = styled(ContentWrapper)`
  padding-top: 0;
  padding-bottom: 0;
  flex-direction: row;
  justify-content: space-between;

  ${breakpoints.tabletVertical} {
    padding-left: ${spacings[3]};
    padding-right: ${spacings[4]};
  }
`

const NavContainer = styled.div`
  ${breakpoints.mobileSmall} {
    padding-top: ${spacings[4]};
    padding-bottom: ${spacings[4]};
  }
`

const Img = styled.img`
  ${breakpoints.mobileSmall} {
    width: ${spacings[6]};
    height: ${spacings[6]};
  }
  ${breakpoints.laptopLarge} {
    width: 8rem;
    height: auto;
  }
`

const Span = styled.span`
  position: relative;
  margin-top: ${spacings[3]};

  &,
  &:after,
  &:before {
    width: 3rem;
    height: 1px;
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

  ${breakpoints.laptopLarge} {
    &,
    &:after,
    &:before {
      width: 4rem;
      height: 1px;
    }
  }
`
const LogoContainer = styled(MenuLink)``

const Navbar = ({ menuColor, logoColor }) => (
  <NavContainer>
    <Nav direction="row" justifyContent="space-between">
      <Link to="/">
        <LogoContainer>
          {logoColor === 'black' ? (
            <Img src={LogoBlack} alt="yalla-logo" />
          ) : (
            <Img src={Logo} alt="yalla-logo" />
          )}
        </LogoContainer>
      </Link>
      <MenuLink to="/menu">
        <Span menuColor={menuColor}>&nbsp;</Span>
      </MenuLink>
    </Nav>
  </NavContainer>
)

Navbar.propTypes = {
  menuColor: PropTypes.string.isRequired,
  logoColor: PropTypes.string.isRequired,
}

export default Navbar
