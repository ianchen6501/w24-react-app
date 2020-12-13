import React from 'react'
import styled from 'styled-components'

const Section = styled.div `
  background: ${props => props.theme.primary_colors.green};
  position: relative;
  witdh: 100%;
  min-height: 100%;
  font-size: ${props => props.theme.fontSizes.h3};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  color: ${props => props.theme.primary_colors.black}
`

export default function Loading() {

  return (
    <Section>Is Loading!</Section>
  )
}

