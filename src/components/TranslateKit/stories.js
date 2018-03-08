import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Kit from "./Kit"
import Connected from "./Connected"

const words = [
  {
    lang: "ja",
    text: "こんにちは",
  },
  {
    lang: "ja",
    text: "世界",
  },
  {
    lang: "ja",
    text: "今日は、良い天気です",
  },
  {
    lang: "ja",
    text: "明日は曇りです",
  },
  {
    lang: "ja",
    text: "私の趣味は映画鑑賞です",
  },
  {
    lang: "ja",
    text: "好きな映画は2001年宇宙の旅です",
  },
  {
    lang: "ja",
    text: "ホラー映画は苦手です",
  },
  {
    lang: "ja",
    text: "私の仕事はエンジニアです",
  },
  {
    lang: "ja",
    text: "主にフロントエンドの仕事を担当しています",
  },
  {
    lang: "ja",
    text: "今はreactに、ハマっています",
  },
  {
    lang: "ja",
    text: "テストコードは書いてる？",
  },
  {
    lang: "ja",
    text: "e2eテストを実装する予定です",
  },
  {
    lang: "ja",
    text: "ごめん、聞き取れなかった",
  },
  {
    lang: "ja",
    text: "うーん、その会話は難しい",
  },
  {
    lang: "ja",
    text: "もう一回言って貰っていい？",
  },
  {
    lang: "ja",
    text: "私は英語の勉強中です",
  },
]
const translates = [
  {
    lang: "en-US",
    text: "hello",
  },
  {
    lang: "en-US",
    text: "world",
  },
  {
    lang: "en-US",
    text: "It is nice weather today",
  },
  {
    lang: "en-US",
    text: "It is cloudy tomorrow",
  },
  {
    lang: "en-US",
    text: "My hobby is watching movies",
  },
  {
    lang: "en-US",
    text: "My favorite movie is a journey in space in 2001",
  },
  {
    lang: "en-US",
    text: "I am not good at horror movies",
  },
  {
    lang: "en-US",
    text: "My job is to be an engineer",
  },
  {
    lang: "en-US",
    text: "I am mainly in charge of front-end work",
  },
  {
    lang: "en-US",
    text: "I am addicted to react now",
  },
  {
    lang: "en-US",
    text: "Do you write the test code?",
  },
  {
    lang: "en-US",
    text: "We plan to implement the e2e test",
  },
  {
    lang: "en-US",
    text: "Sorry, I could not catch it",
  },
  {
    lang: "en-US",
    text: "Well, that conversation is difficult.",
  },
  {
    lang: "en-US",
    text: "Can I ask you once more?",
  },
  {
    lang: "en-US",
    text: "I am studying English",
  },
]

storiesOf("TranslateKit", module)
  .addDecorator(withKnobs)
  .add("Connected", () => <Connected words={words} translates={translates} />)
