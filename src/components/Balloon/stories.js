import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Word from "./Word"
import Translate from "./Translate"

storiesOf("Balloon", module)
  .addDecorator(withKnobs)
  .add("Word", () => (
    <Word highlight={boolean("highlight", false)}>こんにちは</Word>
  ))
  .add("Translate", () => (
    <Translate highlight={boolean("highlight", false)}>Hello</Translate>
  ))
