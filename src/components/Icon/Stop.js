import React from "react"
import styled from "styled-components"

const Stop = styled.div`
  font-size: 50px;
  position: relative;
  width: 1.4em;
  height: 1.4em;
  border: 0.1em solid #ccc;
  border-radius: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0.3em;
    left: 0.3em;
    width: 0.8em;
    height: 0.8em;
    background-color: #ccc;
  }
`

export default () => <Stop />
