import styled from 'styled-components'

//login && register
export const ErrorMessage = styled.div `
  color: ${props => props.theme.primary_colors.light_black};
  font-size: 20px;
  font-weight: bold;
  position: relative;
  text-align: center;
  margin-top: 10px;
`

export const Container = styled.div `
  box-sizing: border-box;
  min-height: 100%;
  padding-top: 64px;
  padding-bottom: 50px;
`

export const Form = styled.form `
  position: relative;
  left: 50%;
  transform: translate(-50%,0px);
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 5px;
  border: solid 2px ${props => props.theme.primary_colors.black};
  padding: 0px 20px 20px 20px;
`

export const InputContainer = styled.div `
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Button = styled.button `
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background: ${props => props.theme.primary_colors.light_black};
  color:  ${props => props.theme.primary_colors.green};
  transform: background 0.1s, color 0.1s;

  &:hover {
    background: white;
    color: black;
  }

  &:focus {
    outline: none;
  }
`

export const UserInput = styled.input `
  height: 30px;
  width: 100%;
  border: solid 1px ${props => props.theme.primary_colors.black};
  border-radius: 3px;
  font-size:20px;
  margin-top:10px;
`

//editPost && newPost
export const NewPostContainer = styled.div `
  height: 100%;
  display: flex;
  justify-content: flex-start;
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
  border: solid 2px ${props => props.theme.primary_colors.black};
  border-radius: 3px;
  font-size:20px;
`

export const Textarea = styled.textarea`
  width: 100%;
  border: solid 2px ${props => props.theme.primary_colors.black};
  border-radius: 3px;
  font-size:20px;
  margin-bottom: 20px;
`
