import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import On from "./On"
import Off from "./Off"

storiesOf("Volume", module)
  .addDecorator(withKnobs)
  .add("On", () => <On />)
  .add("Off", () => <Off />)
