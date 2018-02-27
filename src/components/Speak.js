import React, { Component } from "react"
import Connected from "./Volume/Connected"

export default class extends Component {
  state = {
    status: "INIT",
    synthesisUtterance: null,
  }

  static defaultProps = {
    values: [],
    lang: "en-US",
    silenceTime: 100,
  }

  async componentDidMount() {
    window.SpeechSynthesisUtterance =
      window.SpeechSynthesisUtterance || SpeechSynthesisUtterance

    const synthesisUtterance = await new SpeechSynthesisUtterance()

    await this.setState({
      synthesisUtterance,
    })
  }

  onSpeak = async index => {
    if (!this.props.values[index]) {
      await this.props.onEnd()
      await this.setState({
        status: "INIT",
      })
      return
    }
    await this.setState({
      status: "DOING",
    })

    const text = await this.props.values[index]

    this.state.synthesisUtterance.text = await text
    this.state.synthesisUtterance.lang = await this.props.lang

    await speechSynthesis.speak(this.state.synthesisUtterance)

    await this.onChange(text)

    this.state.synthesisUtterance.onend = () => {
      setTimeout(() => {
        this.onSpeak(index + 1)
      }, this.props.silenceTime)
    }
  }

  onChange = value => {
    this.props.onChange(value)
  }

  render() {
    if (this.state.synthesisUtterance === null) {
      return null
    }

    if (this.state.status !== "INIT") {
      return <Connected status={this.state.status} />
    }

    return (
      <div onClick={() => this.onSpeak(0)}>
        <Connected status={this.state.status} />
      </div>
    )
  }
}
