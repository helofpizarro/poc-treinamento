import { css } from 'styled-components'

import breakpoints from './breakpoints'

export default css`
  .container {
    padding-right: 24px;
    padding-left: 24px;

    @media (min-width: ${breakpoints.md}) {
      max-width: 696px;
      padding: 0;
    }
    @media (min-width: ${breakpoints.lg}) {
      max-width: 936px;
    }
    @media (min-width: ${breakpoints.xl}) {
      max-width: 1128px;
    }
  }

  .row {
    margin-right: -6px;
    margin-left: -6px;

    @media (min-width: ${breakpoints.md}) {
      margin-right: -12px;
      margin-left: -12px;
    }
  }

  *[class^='col-'] {
    padding-right: 6px;
    padding-left: 6px;

    @media (min-width: ${breakpoints.md}) {
      padding-right: 12px;
      padding-left: 12px;
    }
  }
`
