import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Recording from "./Recording"
import Start from "./Start"
import Stop from "./Stop"
import Connected from "./Connected"

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .add("Connected", () => <Connected />)
  .add("Recording", () => <Recording />)
  .add("Start", () => <Start />)
  .add("Stop", () => <Stop />)
