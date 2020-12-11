import React from "react"
import styled from "styled-components"

const Section = styled.section `
  background: ${props => props.theme.colors.light_gray};
  box-sizing: border-box;
  position: relative;
  witdh: 100%;
  min-height: 100%;
  padding-top: 64px;
  padding-bottom: 50px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.h3};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`

export default function Loading() {

  return (
    <Section>Is Loading!</Section>
  )
}

