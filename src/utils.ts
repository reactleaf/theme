import Color from "color"
import { css } from "styled-components"

import { ColorTheme } from "./theme"

export function makeColorTheme(hue: number) {
  return {
    // Inactive colors
    100: Color.lch(100, 0, hue).hex(),
    90: Color.lch(90, 3, hue).hex(),
    80: Color.lch(80, 3, hue).hex(),
    70: Color.lch(70, 3, hue).hex(),

    // Active colors
    98: Color.lch(98, 5, hue).hex(),
    95: Color.lch(95, 10, hue).hex(),
    50: Color.lch(50, 80, hue).hex(),
    40: Color.lch(40, 70, hue).hex(),
    20: Color.lch(20, 40, hue).hex(),
    15: Color.lch(15, 30, hue).hex(),
    10: Color.lch(10, 5, hue).hex(),
  }
}

// color converting utils
export function primary(number: keyof ColorTheme["primary"], alpha: number = 1) {
  return css`
    ${({ theme }) => Color(theme.colors.primary[number]).alpha(alpha).string()}
  `
}

export function status(color: keyof ColorTheme["status"], alpha: number = 1) {
  return css`
    ${({ theme }) => Color(theme.colors.status[color]).alpha(alpha).string()}
  `
}
