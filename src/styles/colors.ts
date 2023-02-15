import { css } from 'styled-components'

export const gray = {
  100: '#F5F6FA',
  200: '#DEDFE4',
  300: '#D1D4E3',
  400: '#F5F6FA',
  500: '#E6E7F0',
  600: '#8C91A9',
  700: '#6A6E81',
  800: '#4B4E5C',
  900: '#D7D7D7',
  light: '#747684',
  base: '#58595b',
  medium: '#4B4E5C',
  dark: '#292929',
}

export const grayscale = {
  100: '#F5F6FA',
  200: '#DEDFE4',
  300: '#B6B7BB',
  400: '#6A6C72',
  500: '#161616',
}

export const newgray = {
  light: '#F5F6FA',
  base: '#6A6C72',
  dark: '#161616',
}

export const white = '#FFFFFF'
export const success = '#00AA4F'
export const error = '#F56A50'

export const orange = {
  light: '#FF9F33',
  base: '#FF7A00',
  dark: '#FF500F',
}

export const brown = {
  base: '#852000',
}

export const green = {
  base: '#039E00',
  light: '#a4d266',
  dark: '#20C05D',
  left: '#DEE021',
  right: '#A4D264',
  extraDark: '#027A75',
  avocado: '#00796B',
  avocadoLight: '#DDF0EF',
}

export const yellow = {
  500: '#FFBA00',
}

export const red = {
  base: '#FD4F47',
}

export const petroleum = {
  base: '#00A0A0',
}

export const lilac = {
  base: '#CD00D1',
}

export const purple = {
  base: '#6B0091',
}

export const blue = {
  light: '#0085FF',
  base: '#356897',
  dark: '#000D84',
}

export const linear = {
  orange: 'linear-gradient(45deg, #FF500F 0%, #FF8700 100%)',
}

type TColor = {
  [name: string]: string
}

export function generateColorClasses(colorMap: TColor, name: string) {
  return Object.keys(colorMap).map(
    (type: string) =>
      css`
        .bg-${name}--${type} {
          background: ${colorMap[type]};
        }
        .text-${name}--${type} {
          color: ${colorMap[type]};
        }
        .fill-${name}--${type} {
          fill: ${colorMap[type]};
        }
      `,
  )
}
