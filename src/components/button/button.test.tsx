import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "components/button";

test("Button correctly rendering", () => {
  const { asFragment } = render(<Button />);
  expect(asFragment()).toMatchSnapshot();
});

test("Button show label when label passed", () => {
  const { getByText } = render(<Button label="Button Login" />);
  expect(getByText(/Login/i)).toHaveTextContent("Button Login");
});

test("Button call handle click when user to click with aria title", () => {
  const onClick = jest.fn();
  const { getByTitle } = render(
    <Button
      onClick={onClick}
      label="Facebook Connect"
      title="Facebook button"
    />
  );
  fireEvent.click(getByTitle(/button/i));
  expect(onClick).toHaveBeenCalled();
});
