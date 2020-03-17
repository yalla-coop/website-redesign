import normalize from 'polished/lib/mixins/normalize'
import { createGlobalStyle } from 'styled-components'

import colors from './color'
import { font } from './typography'

export default createGlobalStyle`
  ${normalize()}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  :before,
  :after {
    box-sizing: border-box;
  }

  body {
    background: ${colors.white};
    color: ${colors.gray2};
    ${font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    color: ${colors.gray3};
  }
`
