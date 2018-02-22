import React, { Component } from "react"
import PropTypes from "prop-types"
import Recording from "./Recording"
import Start from "./Start"
import Stop from "./Stop"

export default class extends Component {
  static defaultProps = {
    status: "INIT",
  }

  static propTypes = {
    status: PropTypes.string,
  }

  render() {
    if (this.props.status === "DOING") {
      return <Recording />
    }

    if (this.props.status === "END") {
      return <Recording />
    }

    return <Start />
  }
}
