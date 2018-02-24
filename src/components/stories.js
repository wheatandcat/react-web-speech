import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Recognition from "./Recognition"

storiesOf("web search", module)
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
