import { colord, extend } from "colord"
import lchPlugin from "colord/plugins/lch"
import { css } from "styled-components"

import { ColorTheme, TypoTheme } from "./theme"

extend([lchPlugin])

// color converting utils
export function grey(number: keyof ColorTheme["grey"], alpha: number = 1) {
  return css`
    ${({ theme }) => colord(theme.colors.grey[number]).alpha(alpha).toRgbString()}
  `
}

export function primary(number: keyof ColorTheme["primary"], alpha: number = 1) {
  return css`
    ${({ theme }) => colord(theme.colors.primary[number]).alpha(alpha).toRgbString()}
  `
}

export function status(color: keyof ColorTheme["status"], alpha: number = 1) {
  return css`
    ${({ theme }) => colord(theme.colors.status[color]).alpha(alpha).toRgbString()}
  `
}

export function typo(key: keyof TypoTheme, color?: string) {
  return css`
    ${({ theme }) => theme.typo[key]};
    ${color && `color: ${color};`};
  `
}
