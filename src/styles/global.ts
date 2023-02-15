import { createGlobalStyle } from 'styled-components'

import normalize from './normalize'
import grid from './grid'
import { gray, grayscale, orange, red, generateColorClasses, newgray } from './colors'
import {
  generateFontSizeClasses,
  generateFontWeightClasses,
  generateLineHeightClasses,
} from './fonts'

import '../sass/bootstrap.scss'

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Sora:wght@400;600;700&display=swap');
  
  ${normalize}
  ${grid}

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora';
    font-weight: 600;
  }

  img {
    max-width: 100%;
  }

  a {
    color: orange['extra'];

    &:hover {
      color:  orange['extra'];
    }
  }

  ${generateColorClasses(orange, 'orange')}
  ${generateColorClasses(gray, 'gray')}
  ${generateColorClasses(grayscale, 'grayscale')}
  ${generateColorClasses(newgray, 'newgray')}
  ${generateColorClasses(red, 'red')}
  ${generateFontWeightClasses()}
  ${generateFontSizeClasses()}
  ${generateLineHeightClasses()}

  .f-sora {
    font-family: 'Sora' !important;
  }

  .f-inter {
    font-family: 'Inter' !important;
  }
`

export default globalStyle
