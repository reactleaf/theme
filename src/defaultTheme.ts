import { ColorTheme, Theme } from "./theme"
import { oklch } from "culori"

const statusColors: ColorTheme["status"] = {
  red: oklch({ mode: "oklch", l: 58, c: 0.185, h: 24 }),
  yellow: oklch({ mode: "oklch", l: 58, c: 0.139, h: 90 }),
  green: oklch({ mode: "oklch", l: 58, c: 0.178, h: 150 }),
  blue: oklch({ mode: "oklch", l: 58, c: 0.122, h: 230 }),
  grey: oklch({ mode: "oklch", l: 58, c: 0, h: 0 }),

  lightRed: oklch({ mode: "oklch", l: 95, c: 0.032, h: 24 }),
  lightYellow: oklch({ mode: "oklch", l: 95, c: 0.031, h: 90 }),
  lightGreen: oklch({ mode: "oklch", l: 95, c: 0.032, h: 150 }),
  lightBlue: oklch({ mode: "oklch", l: 95, c: 0.032, h: 230 }),
  lightGrey: oklch({ mode: "oklch", l: 95, c: 0, h: 0 }),
}

const greyColors: ColorTheme["grey"] = {
  100: oklch({ mode: "oklch", l: 100, c: 0, h: 254 }),
  95: oklch({ mode: "oklch", l: 95, c: 0.0025, h: 254 }),
  90: oklch({ mode: "oklch", l: 90, c: 0.005, h: 254 }),
  80: oklch({ mode: "oklch", l: 80, c: 0.01, h: 254 }),
  70: oklch({ mode: "oklch", l: 70, c: 0.015, h: 254 }),
  10: oklch({ mode: "oklch", l: 10, c: 0.005, h: 254 }),
}

const primaryColors: ColorTheme["primary"] = {
  98: oklch({ mode: "oklch", l: 98, c: 0.01, h: 254 }),
  95: oklch({ mode: "oklch", l: 95, c: 0.024, h: 254 }),
  90: oklch({ mode: "oklch", l: 90, c: 0.049, h: 254 }),
  80: oklch({ mode: "oklch", l: 80, c: 0.104, h: 254 }),
  70: oklch({ mode: "oklch", l: 70, c: 0.16, h: 254 }),
  60: oklch({ mode: "oklch", l: 60, c: 0.189, h: 254 }),
  50: oklch({ mode: "oklch", l: 50, c: 0.154, h: 254 }),
  40: oklch({ mode: "oklch", l: 40, c: 0.125, h: 254 }),
  30: oklch({ mode: "oklch", l: 30, c: 0.095, h: 254 }),
  20: oklch({ mode: "oklch", l: 20, c: 0.061, h: 254 }),
  10: oklch({ mode: "oklch", l: 10, c: 0.032, h: 254 }),
}

const defaultColorTheme: ColorTheme = {
  grey: greyColors,
  primary: primaryColors,
  status: statusColors,
}

const defaultTypoTheme = {
  title: {
    fontSize: 20,
    lineHeight: 32,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
  },
}

export const defaultTheme: Theme = {
  colors: defaultColorTheme,
  typo: defaultTypoTheme,
}
