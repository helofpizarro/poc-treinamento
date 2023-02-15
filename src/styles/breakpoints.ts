type TBreakpoints = {
  [name: string]: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

export const breakpoints: TBreakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
export const device = {
  mobile: `(min-width: ${breakpoints.sm})`,
  tablet: `(min-width: ${breakpoints.md})`,
  desktopLG: `(min-width: ${breakpoints.lg})`,
  desktopXL: `(min-width: ${breakpoints.xl})`,
  desktopXXL: `(min-width: ${breakpoints.xxl})`,
}

export default breakpoints
