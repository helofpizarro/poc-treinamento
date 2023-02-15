import { css } from 'styled-components'

import breakpoints from './breakpoints'

export const sizes = {
  10: '10px',
  12: '12px',
  14: '14px',
  15: '15px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  38: '38px',
  40: '40px',
  42: '42px',
  48: '48px',
  56: '56px',
}

export const weights = {
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  600: '600',
  700: '700',
}

export const lineHeight = {
  12: '12',
  14: '14',
  15: '15',
  16: '16',
  17: '17',
  18: '18',
  19: '19',
  20: '20',
  22: '22',
  24: '24',
  25: '25',
  26: '26',
  28: '28',
  30: '30',
  31: '31',
  32: '32',
  35: '35',
  37: '37',
  40: '40',
  46: '46',
  47: '47',
  50: '50',
  54: '54',
  56: '56',
  58: '58',
  65: '65',
  70: '70',
}

export function generateFontSizeClasses() {
  return Object.keys(sizes).map(
    (size: string) =>
      css`
        .fs-${size} {
          font-size: ${size}px;
        }
        ${Object.keys(breakpoints).map(
          (breakpoint: string) =>
            css`
              @media (min-width: ${breakpoints[breakpoint]}) {
                .fs-${breakpoint}-${size} {
                  font-size: ${size}px;
                }
              }
            `,
        )}
      `,
  )
}

export function generateFontWeightClasses() {
  return Object.keys(weights).map(
    (weight: string) =>
      css`
        .fw-${weight} {
          font-weight: ${weight} !important;
        }
      `,
  )
}

export function generateLineHeightClasses() {
  return Object.keys(lineHeight).map(
    (size: string) =>
      css`
        .lh-${size} {
          line-height: ${size}px;
        }
        ${Object.keys(breakpoints).map(
          (breakpoint: string) =>
            css`
              @media (min-width: ${breakpoints[breakpoint]}) {
                .lh-${breakpoint}-${size} {
                  line-height: ${size}px;
                }
              }
            `,
        )}
      `,
  )
}
