import React, { Component } from "react"
import Kit from "./Kit"

export default class extends Component {
  state = {
    speech: false,
    speaks: null,
    speakText: "",
    speakindex: 0,
  }

  static defaultProps = {
    words: [],
    translates: [],
    rate: 1.0,
    mode: "mix",
  }

  async componentDidMount() {
    this.mixSpeaks()
  }

  mixSpeaks = async () => {
    const speaks = []

    const len = await this.props.words.length

    for (let i = 0; i < len; i++) {
      speaks.push(this.props.words[i])
      speaks.push(this.props.translates[i])
    }

    await this.setState({
      speaks,
    })
  }

  onChangeSpeechText = async (index, text) => {
    await this.setState({
      speakindex: index,
      speakText: text,
    })
  }

  onChangeStatus = async status => {
    await this.setState({
      speech: status === "DOING",
    })
  }
  render() {
    if (this.state.speaks === null) {
      return null
    }

    const speakindex = Math.floor(this.state.speakindex / 2)

    return (
      <Kit
        words={this.props.words}
        translates={this.props.translates}
        speaks={this.state.speaks}
        onChangeSpeechText={this.onChangeSpeechText}
        onChangeStatus={this.onChangeStatus}
        speakText={this.state.speakText}
        speakindex={this.state.speech ? speakindex : null}
      />
    )
  }
}
