import React from "react"
import styled from "styled-components"

const Container = styled.div `
  min-height: 100;
  padding-top: 64px;
  padding-bottom: 64px;
  box-sizing: border-box;
  top: -64px;
`

const Banner = styled.div `
  background: rgb(0,0,0,0.1);
  width: 100vw;
  height: 120px;
  text-align: center;
  font-size: 32px;
  vertical-align: baseline;
  padding-top: 60px;
`

const Body = styled.div `
  font-size: 26px;
  text-align: center;
  margin-top: 80px;
`


export default function AboutPage() {

  return (
    <Container>
      <Banner>關於我們</Banner>
      <Body>這是一個大家集體創作的部落格。<br />
      你可以在這邊自由註冊、發文並觀看別人的文章。<br/>
      enjoy writting!
      </Body>
    </Container>
  )
}
