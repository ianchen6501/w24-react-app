import React from "react"
import {
  ErrorMessage,
  Container,
  Form,
  InputContainer,
  Button,
} from '../../components/Form'
import useHandleLogin from "../../hooks/useHandleLogin"

export default function LoginPage() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    errorMessage,
    setErrormessage,
    handleLogin
  } = useHandleLogin()

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          username:{" "}
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </InputContainer>
        <InputContainer>
          password:{" "}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </InputContainer>
        <Button>登入</Button>
      </Form>
      { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
    </Container>
  )
}