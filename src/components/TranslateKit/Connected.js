import React, { Component } from "react"
import Kit from "./Kit"

export default class extends Component {
  state = {
    speech: false,
    speaks: null,
    speakText: "",
    speakindex: 0,
    marginBottom: 0,
  }

  static defaultProps = {
    words: [],
    translates: [],
    rate: 1.0,
    mode: "mix",
  }

  async componentDidMount() {
    this.mixSpeaks()

    this.setState({
      marginBottom: window.innerHeight,
    })

    window.addEventListener("resize", () => {
      this.setState({
        marginBottom: window.innerHeight,
      })
    })
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

  onChangeSpeechText = async (index, word) => {
    const speakindex = Math.floor(index / 2)

    await this.setState({
      speakindex,
      speakText: word.text,
    })

    if (index % 2 === 1) {
      return
    }

    document
      .getElementById(`item-row-${speakindex + 1}-col-1`)
      .scrollIntoView(true)
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

    return (
      <Kit
        words={this.props.words}
        translates={this.props.translates}
        speaks={this.state.speaks}
        onChangeSpeechText={this.onChangeSpeechText}
        onChangeStatus={this.onChangeStatus}
        speakText={this.state.speakText}
        speakindex={this.state.speech ? this.state.speakindex : null}
        marginBottom={this.state.marginBottom}
      />
    )
  }
}
