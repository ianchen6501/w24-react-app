import React, { useState, useLayoutEffect } from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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
import { getMe } from "../../WebAPI"
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/reducers/userReducer";
import { getAuthTokenFromLocalStorage } from '../../utils'

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
  }, [])

  return (
    <Router>
      {!isLoadinGetMe && (
        <>
          <Header />
          <Switch>
            <Route exact path="/"> 
              <HomePage/>
            </Route>
            <Route path="/list"> 
              <ListPage />
            </Route>
            <Route path="/about"> 
              <AboutPage />
            </Route>
            <Route path="/new-post"> 
              <NewPostPage />
            </Route>
            <Route path="/edit-post/:id"> 
              <EditPostPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/posts/:id">
              <SinglePostPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
          </Switch>
          <Footer>Made by Ian!</Footer>
        </>
      )}
    </Router>
  )
}