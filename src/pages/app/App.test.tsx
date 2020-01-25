import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("App Rendering", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/yarn storybook/i);
  expect(linkElement).toBeInTheDocument();
});
