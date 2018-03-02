import React from "react"
import styled from "styled-components"
import Item from "./Item"
import Word from "../Balloon/Word"
import Translate from "../Balloon/Translate"

const Root = styled.div`
  display: flex;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
`

export default ({ words, translates }) => (
  <Root>
    <Grid>
      {words.map((word, index) => (
        <Item key={index} row={index} col={1}>
          <Word>{word}</Word>
        </Item>
      ))}
    </Grid>
    <Grid>
      {translates.map((translate, index) => (
        <Item key={index} row={index} col={1}>
          <Translate>{translate}</Translate>
        </Item>
      ))}
    </Grid>
  </Root>
)
