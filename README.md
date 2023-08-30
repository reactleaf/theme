# @reactleaf/theme

`styled-components` Theme Provider for @reactleaf projects

### Install

```sh
$ yarn add @reactleaf/theme
```

## With Styled components

#### Prepare

and make your custom definition file like `src/@types/styled-components.d.ts` and save

```typescript
import "styled-components"
import { Theme } from "@reactleaf/theme"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
```

#### Provide

and Make sure `<ThemeProvider />` provides the theme. You can use our default theme.

```tsx
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "@reactleaf/theme"

function YourApp() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  )
}
```

#### Usage

Soooo Easy!

```typescript
import { primary } from "@reactleaf/theme"

const Message = styled.p`
  color: ${primary(50)};
  ${({ theme }) => theme.typo.body};
`
```

## With Plain CSS

Just add `import '@reactleaf/theme/theme.css`

#### What'is in there

Colors are given in css variables.

```css
:root {
  --leaf-grey-100: ...
  --leaf-grey-90: ...
  --leaf-grey-80: ...
  --leaf-grey-70: ...
  --leaf-grey-10: ...

  --leaf-primary-98: ...
  --leaf-primary-95: ...
  --leaf-primary-90: ...
  --leaf-primary-80: ...
  --leaf-primary-70: ...
  --leaf-primary-60: ...
  --leaf-primary-50: ...
  --leaf-primary-40: ...
  --leaf-primary-30: ...
  --leaf-primary-20: ...
  --leaf-primary-10: ...

  --leaf-status-red: ...
  --leaf-status-yellow: ...
  --leaf-status-green: ...
  --leaf-status-blue: ...
  --leaf-status-grey: ...

  --leaf-status-lightRed: ...
  --leaf-status-lightYellow: ...
  --leaf-status-lightGreen: ...
  --leaf-status-lightBlue: ...
  --leaf-status-lightGrey: ...
}
```

Typos are just an classname.

```css
.leaf-title {
  font-size: 1.25rem;
  line-height: 2rem;
}
.leaf-body {
  font-size: 1rem;
  line-height: 1.5;
}
.leaf-label {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.leaf-desc {
  font-size: 0.75rem;
  line-height: 1.5;
}
```
