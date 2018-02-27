import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Recognition from "./Recognition"
import Speak from "./Speak"

storiesOf("Web search", module)
  .addDecorator(withKnobs)
  .add("Recognition", () => (
    <Recognition
      lang="ja"
      startWord="スタート"
      endWord="終了"
      onValues={action("onValues")}
      onChangeStatus={action("onChangeStatus")}
      onAddText={action("onAddText")}
    />
  ))
  .add("Speak", () => (
    <Speak
      values={["hello", "world"]}
      onEnd={action("onEnd")}
      onChange={action("onChange")}
      silenceTime={100}
    />
  ))
