import styled from 'styled-components'
import { Wrapper as ContentWrapper } from '../../src/components/contentWrapper'
import { breakpoints, spacings, colors } from '../../src/utils'

export const HeadingsWrapper = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    margin: 0;
    padding-bottom: 0;

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
    padding-bottom: 0;
  }

  ${breakpoints.laptopLarge} {
    padding-left: 13rem;
    width: 80%;
    justify-content: space-between;
  }
`

export const PointsSection = styled.section`
  ${breakpoints.mobileSmall} {
    h3 {
      font-size: 24px;
      margin-top: ${spacings[6]};
      margin-bottom: ${spacings[3]};
    }
  }

  ${breakpoints.laptopLarge} {
    margin: 3rem auto 15rem 15rem;
    width: 70%;

    h3 {
      margin-bottom: 2rem;
    }
  }
`

export const MetaDataWrapper = styled.div``

export const TextSection = styled.div`
  ${breakpoints.mobileSmall} {
    padding-bottom: 0;
    h2 {
      font-size: 18px;
      margin-bottom: ${spacings[2]};
    }

    p {
      font-size: 18px;
    }
  }
`

export const TestimonialsSection = styled(ContentWrapper)`
  ${breakpoints.mobileSmall} {
    h2 {
      font-size: 18px;
      margin-bottom: ${spacings[2]};
    }

    p {
      font-size: 18px;
      margin-bottom: ${spacings[3]};
    }
    p:last-child {
      margin-bottom: 24px;
    }
  }
`
