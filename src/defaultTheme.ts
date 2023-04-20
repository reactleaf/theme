import Color from "color"
import { css } from "styled-components"
import { ColorTheme, Theme } from "./theme"
import { makeColorTheme } from "./utils"

const statusColors: ColorTheme["status"] = {
  red: Color.lch(50, 80, 30).hex(),
  yellow: Color.lch(70, 100, 90).hex(),
  green: Color.lch(60, 80, 150).hex(),
  blue: Color.lch(50, 80, 240).hex(),
  grey: Color.lch(60, 0, 0).hex(),
}

const primaryColors: ColorTheme["primary"] = makeColorTheme(260)

const defaultColorTheme: ColorTheme = {
  primary: primaryColors,
  status: statusColors,
}

const defaultTypoTheme = {
  body: css`
    font-size: 1rem;
    line-height: 1.5;
  `,
  title: css`
    font-size: 1.25rem;
    line-height: 2rem;
  `,
  label: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  description: css`
    font-size: 0.75rem;
    line-height: 1.5;
    opacity: 0.6;
  `,
  error: css`
    font-size: 0.75rem;
    line-height: 1.5;
    color: ${statusColors.red};
  `,
  link: css`
    font-size: 1rem;
    line-height: 1.5;
    color: ${defaultColorTheme.primary[50]};
  `,
}

export const defaultTheme: Theme = {
  colors: defaultColorTheme,
  typo: defaultTypoTheme,
}
