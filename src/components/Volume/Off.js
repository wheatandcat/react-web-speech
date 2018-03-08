import React from "react"
import styled from "styled-components"

const Volume = styled.div`
  top: 1.25rem;
  left: 0.5rem;
  font-size: 50px;
  position: relative;
  width: 0.4em;
  height: 0.4em;
  background-color: #39a9d6;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -0.3em;
    left: 0;
    width: 0;
    height: 0;
    border-top: 0.5em solid transparent;
    border-bottom: 0.5em solid transparent;
    border-right: 0.8em solid #39a9d6;
  }
`

export default () => <Volume />
