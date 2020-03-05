import { createGlobalStyle } from 'styled-components'
import normalize from 'polished/lib/mixins/normalize'
import { font } from './typography'
import colors from './color'

export default createGlobalStyle`
  ${normalize()}

  html {
    font-size: 10px;
  }

  :before,
  :after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${colors.white};
    color: ${colors.darkGray};
    ${font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    color: ${colors.gray}
  }
`
