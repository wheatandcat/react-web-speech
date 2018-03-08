import React, { Component } from "react"
import PropTypes from "prop-types"
import On from "./On"
import Off from "./Off"
import Repeat from "./Repeat"

export default class extends Component {
  static defaultProps = {
    status: "INIT",
  }

  static propTypes = {
    status: PropTypes.string,
  }

  render() {
    if (this.props.status === "DOING") {
      return <On />
    }

    if (this.props.status === "END") {
      return <Repeat />
    }

    return <Off />
  }
}
