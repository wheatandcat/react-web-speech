import React, { Component } from "react"
import Connected from "./Volume/Connected"

export default class extends Component {
  state = {
    status: "INIT",
    synthesisUtterance: null,
  }

  static defaultProps = {
    values: [],
    silenceTime: 100,
    rate: 1.0,
    volume: 1.0,
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
        status: "END",
      })
      this.props.onChangeStatus("END")
      return
    }

    if (this.state.status === "INIT") {
      await this.setState({
        status: "DOING",
      })
      this.props.onChangeStatus("DOING")
    }

    const value = await this.props.values[index]

    this.state.synthesisUtterance.text = value.text
    this.state.synthesisUtterance.lang = value.lang
    this.state.synthesisUtterance.rate = this.props.rate
    this.state.synthesisUtterance.volume = this.props.volume

    await speechSynthesis.speak(this.state.synthesisUtterance)

    await this.onChange(index, value)

    this.state.synthesisUtterance.onend = () => {
      setTimeout(() => {
        this.onSpeak(index + 1)
      }, this.props.silenceTime)
    }
  }

  onChange = (index, value) => {
    this.props.onChange(index, value)
  }

  render() {
    if (this.state.synthesisUtterance === null) {
      return null
    }

    if (this.state.status === "DOING") {
      return <Connected status={this.state.status} />
    }

    return (
      <div onClick={() => this.onSpeak(0)}>
        <Connected status={this.state.status} />
      </div>
    )
  }
}
