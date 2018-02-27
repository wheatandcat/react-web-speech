import React from "react"
import styled from "styled-components"

const Translate = styled.div`
  display: inline-block;
  position: relative;
  margin: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid #666;
  border-radius: 30px;
  min-width: 10rem;
  man-width: 50rem;

  &::before {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 40px;
    width: 0;
    height: 0;
    border-top: 30px solid #666;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    transform-origin: left top;
    transform: skewX(-40deg);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -26px;
    left: 43px;
    width: 0;
    height: 0;
    border-top: 30px solid #fff;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    transform-origin: left top;
    transform: skewX(-40deg);
  }
`

export default ({ children }) => <Translate>{children}</Translate>
