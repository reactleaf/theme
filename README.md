# @reactleaf/theme

`styled-components` Theme Provider for @reactleaf projects

### Install

```sh
$ yarn add @reactleaf/theme
```

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

### Usage

Then you can use like this.

```typescript
import { primary } from "@reactleaf/theme"

const Message = styled.p`
  color: ${primary(50)};
  ${({ theme }) => theme.typo.body};
`
```
