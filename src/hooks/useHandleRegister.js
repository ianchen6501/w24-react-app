import { useState } from 'react'
import { register } from '../WebAPI'
import { deleteAuthTokenFromLocalStorage, setAuthTokenToLocalStorage } from '../utils'
import { useHistory } from 'react-router-dom'
import { getUserData } from '../redux/reducers/userReducer'
import { useDispatch } from 'react-redux'

export default function useHandleRegister() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [errorMessage, setErrormessage] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleRegister = (event) => {
    setErrormessage(null)
    event.preventDefault()
    register(username, password, nickname)
    .then(response => {
      if(response.ok !== 1) {
        return setErrormessage(response.message)
      }
      deleteAuthTokenFromLocalStorage()
      setAuthTokenToLocalStorage(response.token)
      dispatch(getUserData(response.token))
      .then(result => {
        if(result){
          return setErrormessage(result.toString())
        }
        history.push('/')
      })
    })
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    nickname,
    setNickname,
    errorMessage,
    setErrormessage,
    handleRegister
  }
}