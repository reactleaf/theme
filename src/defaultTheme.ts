import { colord, extend } from "colord"
import lchPlugin from "colord/plugins/lch"
import { css } from "styled-components"
import { ColorTheme, Theme } from "./theme"

extend([lchPlugin])

const statusColors: ColorTheme["status"] = {
  red: colord({ l: 50, c: 60, h: 30 }).toHex(),
  yellow: colord({ l: 50, c: 55, h: 90 }).toHex(),
  green: colord({ l: 50, c: 60, h: 150 }).toHex(),
  blue: colord({ l: 50, c: 55, h: 270 }).toHex(),
  grey: colord({ l: 50, c: 0, h: 0 }).toHex(),

  lightRed: colord({ l: 95, c: 8, h: 30 }).toHex(),
  lightYellow: colord({ l: 95, c: 8, h: 90 }).toHex(),
  lightGreen: colord({ l: 95, c: 8, h: 150 }).toHex(),
  lightBlue: colord({ l: 95, c: 8, h: 270 }).toHex(),
  lightGrey: colord({ l: 95, c: 0, h: 0 }).toHex(),
}

const greyColors: ColorTheme["grey"] = {
  100: colord({ l: 100, c: 2, h: 260 }).toHex(),
  90: colord({ l: 90, c: 2, h: 260 }).toHex(),
  80: colord({ l: 80, c: 2, h: 260 }).toHex(),
  70: colord({ l: 70, c: 2, h: 260 }).toHex(),
  10: colord({ l: 10, c: 2, h: 260 }).toHex(),
}

const primaryColors: ColorTheme["primary"] = {
  98: colord({ l: 98, c: 3, h: 260 }).toHex(),
  95: colord({ l: 95, c: 7.5, h: 260 }).toHex(),
  90: colord({ l: 90, c: 15, h: 265 }).toHex(),
  80: colord({ l: 80, c: 30, h: 265 }).toHex(),
  70: colord({ l: 70, c: 46, h: 270 }).toHex(),
  60: colord({ l: 60, c: 62, h: 275 }).toHex(),
  50: colord({ l: 50, c: 75, h: 280 }).toHex(),
  40: colord({ l: 40, c: 64, h: 280 }).toHex(),
  30: colord({ l: 30, c: 53, h: 280 }).toHex(),
  20: colord({ l: 20, c: 41, h: 280 }).toHex(),
  10: colord({ l: 10, c: 30, h: 280 }).toHex(),
}

const defaultColorTheme: ColorTheme = {
  grey: greyColors,
  primary: primaryColors,
  status: statusColors,
}

const defaultTypoTheme = {
  title: css`
    font-size: 1.25rem;
    line-height: 2rem;
  `,
  body: css`
    font-size: 1rem;
    line-height: 1.5;
  `,
  label: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  description: css`
    font-size: 0.75rem;
    line-height: 1.5;
  `,
}

export const defaultTheme: Theme = {
  colors: defaultColorTheme,
  typo: defaultTypoTheme,
}
