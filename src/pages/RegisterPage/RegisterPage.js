import React from 'react'
import {
  ErrorMessage,
  Container,
  Form,
  InputContainer,
  Button,
  UserInput
} from '../../components/Form'
import useHandleRegister from '../../hooks/useHandleRegister'

export default function RegisterPage() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    nickname,
    setNickname,
    errorMessage,
    handleRegister
  } = useHandleRegister()

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <InputContainer>
          username:{' '}
          <UserInput type='text' value={username} onChange={(e) => setUsername(e.target.value)}></UserInput>
        </InputContainer>
        <InputContainer>
          password:{' '}
          <UserInput type='password' value={password} onChange={(e) => setPassword(e.target.value)}></UserInput>
        </InputContainer>
        <InputContainer>
          nickname:{' '}
          <UserInput type='text' value={nickname} onChange={(e) => setNickname(e.target.value)}></UserInput>
        </InputContainer>
        <Button>註冊</Button>
      </Form>
      { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
    </Container>
  )
}