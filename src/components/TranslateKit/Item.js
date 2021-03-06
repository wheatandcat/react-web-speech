import React from "react"
import styled from "styled-components"

const Root = styled.div`
  min-width: 30rem;
  max-width: 60rem;
  padding-bottom: 1rem;
  border-bottom: medium solid #fff;
`

const Highlight = styled.div`
  min-width: 30rem;
  max-width: 60rem;
  padding-bottom: 1rem;
  border-bottom: medium solid #f00;
`

export default ({ children, row, col, highlight }) => {
  if (highlight) {
    return (
      <Highlight
        style={{
          gridRow: row,
          gridColumn: col,
        }}
        id={`item-row-${row}-col-${col}`}
      >
        {children}
      </Highlight>
    )
  }

  return (
    <Root
      style={{
        gridRow: row,
        gridColumn: col,
      }}
      id={`item-row-${row}-col-${col}`}
    >
      {children}
    </Root>
  )
}
