import React from "react"
import styled from "styled-components"

const Animation = styled.div`
  > div {
    animation: animationTest 2s ease-in-out 0s infinite normal;

    @keyframes animationTest {
      50% {
        transform: scale(1.1);
      }
    }
  }
`

const Recording = styled.div`
  font-size: 50px;
  position: relative;
  width: 1.4em;
  height: 1.4em;
  border: 0.1em solid #ff662b;
  border-radius: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    width: 1em;
    height: 1em;
    background-color: #ff662b;
    border-radius: 100%;
  }
`

export default () => (
  <Animation>
    <Recording />
  </Animation>
)
