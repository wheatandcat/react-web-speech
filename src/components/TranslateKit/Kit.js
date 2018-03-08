import React, { Fragment } from "react"
import styled from "styled-components"
import Item from "./Item"
import Word from "../Balloon/Word"
import Translate from "../Balloon/Translate"
import Speak from "../Speak"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  min-width: 60rem;
  max-width: 100rem;
`
const Root = styled.div`
  display: flex;
  flexgrow: 1;
  padding: 1rem 2rem;
`

const Side = styled.div`
  width: 20rem;
  min-width: 10rem;
`
const ActionZone = styled.div`
  position: fixed;
`

export default ({
  words,
  translates,
  speaks,
  rate,
  speakindex,
  speakText,
  marginBottom,
  onChangeSpeechText,
  onChangeStatus,
}) => (
  <Root>
    <Side>
      <ActionZone>
        <Speak
          values={speaks}
          onEnd={() => {}}
          onChange={onChangeSpeechText}
          onChangeStatus={onChangeStatus}
          silenceTime={100}
          rate={rate}
        />
      </ActionZone>
    </Side>
    <div>
      <Grid>
        {words.map((word, index) => (
          <Fragment key={index}>
            <Item row={index + 1} col={1} highlight={index === speakindex}>
              <Word
                highlight={
                  index === speakindex && speakText === words[index].text
                }
              >
                {words[index].text}
              </Word>
            </Item>
            <Item row={index + 1} col={2} highlight={index === speakindex}>
              <Translate
                highlight={
                  index === speakindex && speakText === translates[index].text
                }
              >
                {translates[index].text}
              </Translate>
            </Item>
          </Fragment>
        ))}
      </Grid>
      <div style={{ marginBottom }} />
    </div>
  </Root>
)
