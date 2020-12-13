import React from 'react'
import {
  ErrorMessage,
  Container,
  Form,
  InputContainer,
  Button,
  UserInput
} from '../../components/Form'
import useHandleLogin from '../../hooks/useHandleLogin'

export default function LoginPage() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    errorMessage,
    handleLogin
  } = useHandleLogin()

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          username:{' '}
          <UserInput type='text' value={username} onChange={(e) => setUsername(e.target.value)}></UserInput>
        </InputContainer>
        <InputContainer>
          password:{' '}
          <UserInput type='password' value={password} onChange={(e) => setPassword(e.target.value)}></UserInput>
        </InputContainer>
        <Button>登入</Button>
      </Form>
      { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
    </Container>
  )
}