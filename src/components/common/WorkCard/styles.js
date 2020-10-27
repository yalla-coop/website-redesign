import styled from 'styled-components'

import { colors, breakpoints, spacings } from '../../../utils'

export const WorkWrapper = styled.div`
  color: ${colors.white};

  ${breakpoints.mobileSmall} {
    h3 {
      padding-top: ${spacings[3]};
      padding-bottom: ${spacings[2]};
      padding-left: 0;
    }

    h4 {
      padding-left: 0;
    }

    margin-bottom: ${spacings[6]};
  }
`

export const TextWrapper = styled.div``
