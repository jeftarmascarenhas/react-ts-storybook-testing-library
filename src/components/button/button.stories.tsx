import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import Button from "components/button";

const stories: any = storiesOf("Buttons", module).addDecorator(withKnobs);

const colors = ["primary", "secondary"];

stories.addWithJSX("Button Tester", () => (
  <Button
    label={text("label", "Default Text")}
    disabled={boolean("disabled", false)}
    onClick={action("Clicked")}
    color={select("color", colors, "primary")}
  />
));

const buttonExamples = (color: string) => {
  stories.add(color, () => (
    <>
      <Button label={color} onClick={action("Clicked")} color={color} />
      {` `}
      <Button
        label={text("label", color)}
        onClick={action("Clicked")}
        color={color}
        disabled={boolean("disabled", true)}
      />
    </>
  ));
};

buttonExamples("primary");
buttonExamples("secondary");
