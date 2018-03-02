import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Kit from "./Kit"

storiesOf("TranslateKit", module)
  .addDecorator(withKnobs)
  .add("Kit", () => (
    <Kit words={["こんにちは", "世界"]} translates={["hello", "world"]} />
  ))
