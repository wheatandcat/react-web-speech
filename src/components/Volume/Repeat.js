import React from "react"
import styled from "styled-components"

const Root = styled.div``

const Button = styled.div`
  border-radius: 50%;
  background-color: #ccc;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export default () => (
  <Root>
    <Button>repeat</Button>
  </Root>
)
