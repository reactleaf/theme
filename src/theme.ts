import { SimpleInterpolation } from "styled-components"

export interface Theme {
  colors: ColorTheme
  typo: TypoTheme
}

export interface ColorTheme {
  grey: {
    100: string
    90: string
    80: string
    70: string
    10: string
  }
  primary: {
    98: string
    95: string
    90: string
    80: string
    70: string
    60: string
    50: string
    40: string
    30: string
    20: string
    10: string
  }
  status: {
    red: string
    yellow: string
    green: string
    blue: string
    grey: string
    lightRed: string
    lightYellow: string
    lightGreen: string
    lightBlue: string
    lightGrey: string
  }
}

export interface TypoTheme {
  body: SimpleInterpolation
  title: SimpleInterpolation
  label: SimpleInterpolation
  description: SimpleInterpolation
}
