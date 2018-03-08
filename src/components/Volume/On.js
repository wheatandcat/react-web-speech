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

const Volume3 = styled.div`
  position: absolute;
  top: 0;
  left: 0.4em;
  width: 0.4em;
  height: 0.2em;
  border-top: 0.1em solid transparent;
  border-left: 0.1em solid transparent;
  border-right: 0.1em solid #39a9d6;
  border-bottom: 0.1em solid transparent;
  border-radius: 100%;

  &::before {
    content: "";
    position: absolute;
    top: -0.3em;
    left: 0.1em;
    width: 0.4em;
    height: 0.6em;
    border-top: 0.1em solid transparent;
    border-left: 0.1em solid transparent;
    border-right: 0.1em solid #39a9d6;
    border-bottom: 0.1em solid transparent;
    border-radius: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: -0.5em;
    left: 0.1em;
    width: 0.6em;
    height: 1em;
    border-top: 0.1em solid transparent;
    border-left: 0.1em solid transparent;
    border-right: 0.1em solid #39a9d6;
    border-bottom: 0.1em solid transparent;
    border-radius: 100%;
  }
`

const Animation = styled.div`
  > div {
    animation: animationTest 2s ease-in-out 0s infinite normal;

    @keyframes animationTest {
      50% {
        transform: scale(1.2);
      }
    }
  }
`

export default () => (
  <Volume>
    <Animation>
      <Volume3 />
    </Animation>
  </Volume>
)
