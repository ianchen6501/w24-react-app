import React, { useState, useLayoutEffect } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from '../../pages/HomePage'
import AboutPage from '../../pages/AboutPage'
import LoginPage from '../../pages/LoginPage'
import NewPostPage from '../../pages/NewPostPage'
import SinglePostPage from '../../pages/SinglePostPage'
import RegisterPage from '../../pages/RegisterPage'
import EditPostPage from '../../pages/EditPostPage'
import ListPage from '../../pages/ListPage'
import Header from '../Header'
import { Footer } from '../Footer'
import { getMe } from '../../WebAPI'
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/reducers/userReducer';
import { getAuthTokenFromLocalStorage } from '../../utils'
import styled from 'styled-components';

const Container = styled.div `
  min-height: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 64px;
  padding-bottom: 50px;
  background: ${props => props.theme.primary_colors.green};
`

export default function App() {
  const [isLoadinGetMe, setIsLoadinGetMe] = useState(false)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if(localStorage.getItem('token')) {
      const token = getAuthTokenFromLocalStorage()
      setIsLoadinGetMe(true)
      getMe(token)
      .then(response => {
        if(response.ok !== 1) {
          return console.log(response)
        }
        dispatch(setUserData(response.data))
        setIsLoadinGetMe(false)
      })
    }
  }, [dispatch])

  return (
    <Router>
      {!isLoadinGetMe && (
        <>
          <Header />
          <Switch>
            <Container>
              <Route exact path='/'> 
                <HomePage/>
              </Route>
              <Route path='/list'> 
                <ListPage />
              </Route>
              <Route path='/about'> 
                <AboutPage />
              </Route>
              <Route path='/new-post'> 
                <NewPostPage />
              </Route>
              <Route path='/edit-post/:id'> 
                <EditPostPage />
              </Route>
              <Route path='/login'>
                <LoginPage />
              </Route>
              <Route path='/posts/:id'>
                <SinglePostPage />
              </Route>
              <Route path='/register'>
                <RegisterPage />
              </Route>
            </Container>
          </Switch>
          <Footer>Made by Ian!</Footer>
        </>
      )}
    </Router>
  )
}