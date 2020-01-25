import React from "react";
import { ThemeProvider } from "styled-components";
import {
  configure,
  setAddon,
  addParameters,
  addDecorator
} from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { create } from "@storybook/theming";

import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";

const storyBookTheme = create({
  fontBase: "Open Sans, sans-serif",
  fontCode: "monospace"
});

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
));

addParameters({
  options: {
    theme: storyBookTheme
  }
});

setAddon(JSXAddon);

// automatically import all files ending in *.stories.ts
configure(require.context("../src", true, /\.stories\.(ts|tsx)$/), module);
