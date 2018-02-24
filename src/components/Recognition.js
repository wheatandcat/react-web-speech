import React, { Component } from "react"
import Connected from "./Icon/Connected"

export default class extends Component {
  state = {
    recognition: null,
    values: [],
    status: "INIT",
  }

  static defaultProps = {
    startWord: "start",
    endWord: "end",
    lang: "en-US",
  }

  async componentDidMount() {
    await this.props.onChangeStatus("INIT")

    window.SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition

    const recognition = await new webkitSpeechRecognition()

    recognition.lang = await this.props.lang

    recognition.addEventListener("result", async event => {
      const text = await event.results.item(0).item(0).transcript

      if (this.state.status === "INIT" && text === this.props.startWord) {
        await this.setState({
          status: "DOING",
        })
        await this.props.onChangeStatus("DOING")
      } else if (this.state.status === "DOING" && text !== this.props.endWord) {
        const values = await [...this.state.values, text]
        await this.setState({
          values,
        })
      } else if (this.state.status === "DOING" && text === this.props.endWord) {
        await this.setState({
          status: "END",
        })
        await this.props.onChangeStatus("END")
      }

      if (this.state.status !== "INIT") {
        this.props.onAddText(text)
      }
    })

    recognition.addEventListener("end", async () => {
      await this.state.recognition.stop()

      if (this.state.status === "END") {
        this.props.onValues(this.state.values)
        await this.setState({
          values: [],
          status: "INIT",
        })

        await this.props.onChangeStatus("INIT")
      }

      await this.onRecognition()
    })

    await this.setState({
      recognition,
    })

    await this.onRecognition()
  }

  onRecognition = async () => {
    await this.state.recognition.start()
  }

  render() {
    if (this.state.recognition === null) {
      return null
    }

    return (
      <div>
        <Connected status={this.state.status} />
      </div>
    )
  }
}
