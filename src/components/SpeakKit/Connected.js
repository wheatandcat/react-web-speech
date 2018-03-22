import React, { Component } from "react"

export default class extends Component {
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
