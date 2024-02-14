import { Oklch } from "culori"

export interface Theme {
  colors: ColorTheme
  typo: TypoTheme
}

export interface RawTypo {
  fontSize: number
  lineHeight: number
}

export interface ColorTheme {
  grey: {
    100: Oklch
    95: Oklch
    90: Oklch
    80: Oklch
    70: Oklch
    10: Oklch
  }
  primary: {
    98: Oklch
    95: Oklch
    90: Oklch
    80: Oklch
    70: Oklch
    60: Oklch
    50: Oklch
    40: Oklch
    30: Oklch
    20: Oklch
    10: Oklch
  }
  status: {
    red: Oklch
    yellow: Oklch
    green: Oklch
    blue: Oklch
    grey: Oklch
    lightRed: Oklch
    lightYellow: Oklch
    lightGreen: Oklch
    lightBlue: Oklch
    lightGrey: Oklch
  }
}

export interface TypoTheme {
  body: RawTypo
  title: RawTypo
  label: RawTypo
  description: RawTypo
}
