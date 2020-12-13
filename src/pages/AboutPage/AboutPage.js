import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div `
  min-height: 100%;
  height: 100%;
`

const Banner = styled.div `
  left: 50%;
  top: 30vh;
  width: 200px;
  position: relative;
  transform: translate(-50%, 50%);
  text-align: center;
  font-size: 26px;
  padding: 15px;
  border: solid 2px ${props => props.theme.primary_colors.black};
  border-radius: 50px;
  transition: top 0.1s;

  ${props => props.isHover && `top: 20vh;`}
`

const Body = styled.div `
  position: relative;
  width: 500px;
  top: 30%;
  font-size: 20px;
  line-height: 40px;
  left: 50%;
  transform: translate(-20%, 0%);
`

export default function AboutPage() {
  const [isHover, setIsHover] = useState(false)
  const [isBodyShow, setIsBodyShow] = useState(false)

  function handleOnHover() {
    setIsHover(true)
    setTimeout(() => setIsBodyShow(true), 100)
  }

  return (
    <Container>
      <Banner onMouseOver={() => {handleOnHover()}} isHover={isHover}>關於我們</Banner>
      {isBodyShow && (
        <Body>enjoy writting!<br />
          這是一個大家集體創作的部落格。<br />
          你可以在這邊自由註冊、發文並觀看別人的文章。
        </Body>
      )}
    </Container>
  )
}
