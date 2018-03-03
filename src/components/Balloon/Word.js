import React from "react"
import styled from "styled-components"

const Balloon = styled.div`
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

  span {
    padding: 0.25rem 0.5rem;
  }
`

const Highlight = styled.div`
  font-weight: 700;

  span {
    background: #aacbf0 !important;
  }
`

export default ({ children, highlight }) => {
  if (highlight) {
    return (
      <Highlight>
        <Balloon>
          <span>{children}</span>
        </Balloon>
      </Highlight>
    )
  }

  return (
    <Balloon>
      <span>{children}</span>
    </Balloon>
  )
}
