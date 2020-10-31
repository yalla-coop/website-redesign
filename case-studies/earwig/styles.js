import styled from 'styled-components'
import { Wrapper as ContentWrapper } from '../../src/components/contentWrapper'
import { breakpoints, spacings, colors } from '../../src/utils'

export const HeadingsWrapper = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    margin: 0;
    h2 {
      font-size: 24px;
      line-height: 32px;
    }

    h3 {
      color: ${colors.gray3};
      padding-bottom: ${spacings[2]};
    }
  }

  ${breakpoints.laptopLarge} {
    width: 80%;
    margin: 6rem auto 4rem 16rem;
  }
`

export const SecondSection = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    display: flex;
    flex-direction: column-reverse;
  }

  ${breakpoints.laptopLarge} {
    padding-left: 13rem;
    width: 80%;
    justify-content: space-between;
  }
`

export const PointsSection = styled.section`
  margin: 3rem auto 15rem 15rem;
  width: 70%;

  h3 {
    margin-bottom: 2rem;
  }
`

export const MetaDataWrapper = styled.div``
