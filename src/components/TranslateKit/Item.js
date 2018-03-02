import React from "react"
import styled from "styled-components"

export default ({ children, row, col }) => (
  <div
    style={{
      gridRow: row,
      gridColumn: col,
    }}
  >
    {children}
  </div>
)
