import React from "react"
import styled from "styled-components"

const Balloon = styled.div`
  display: inline-block;
  position: relative;
  margin: 20px;
  padding: 20px;
  background: #666;
  border-radius: 30px;
  color: #fff;
  min-width: 10rem;
  man-width: 50rem;

  &::after {
    content: "";
    position: absolute;
    margin: 0;
    bottom: -30px;
    left: 30px;
    width: 0;
    height: 0;
    border-top: 40px solid #666;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    transform: rotate(30deg);
  }
`

export default ({ children }) => <Balloon>{children}</Balloon>
