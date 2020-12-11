import styled from "styled-components"

//login && register
export const ErrorMessage = styled.div `
  color: red;
  position: relative;
  text-align: center;
`

export const Container = styled.div `
  box-sizing: border-box;
  min-height: 100%;
  padding-top: 64px;
  padding-bottom: 50px;
`

export const Form = styled.form `
  margin-top: 50px;
  position: relative;
  left: 50%;
  transform: translate(-50%,0px);
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 5px;
  border: solid 0.5px rgb(0,0,0,0.2);
`

export const InputContainer = styled.div `
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Button = styled.button `
  padding: 6px 10px;
  border: none;
  border-radius: 2px;
  background: rgb(0,0,0,0.15);
  font-size: 20px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`

//editPost && newPost
export const NewPostContainer = styled.div `
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:nth-child(3) {
    width:100px;
  }
`

export const Section = styled.div `
  display: block;
  width: 90vw;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: solid 0.1px rgb(0,0,0,0.2);
  border-radius: 3px;
  font-size:20px;
`

export const Textarea = styled.textarea`
  width: 100%;
  border: solid 0.1px rgb(0,0,0,0.2);
  border-radius: 3px;
  font-size:20px;
`
