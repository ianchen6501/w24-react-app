import React from "react"
import {
  ErrorMessage,
  Container,
  Form,
  InputContainer,
  Button,
} from '../../components/Form'
import useHandleRegister from "../../hooks/useHandleRegister"

export default function RegisterPage() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    nickname,
    setNickname,
    errorMessage,
    setErrormessage,
    handleRegister
  } = useHandleRegister()

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <InputContainer>
          username:{" "}
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </InputContainer>
        <InputContainer>
          password:{" "}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </InputContainer>
        <InputContainer>
          nickname:{" "}
          <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
        </InputContainer>
        <Button>註冊</Button>
      </Form>
      { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
    </Container>
  )
}