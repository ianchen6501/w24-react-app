import React from "react"
import styled from "styled-components"
import {
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setAuthTokenResponse, setUserData } from "../../redux/reducers/userReducer"
import { deleteAuthTokenFromLocalStorage } from '../../utils'

const HeaderContainer =styled.div `
  position: fixed;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  border-bottom: solid 0.1px rgb(0,0,0,0.2);
  padding: 0px, 30px;
  background: white;
  box-shadow: 0.2px 0.2px 0.3px;
  z-index: 2;
`

const Brand = styled.div `
  margin-left: 20px;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`

const NavbarList = styled.div `
  display: flex;
  align-items: center;
`

const Nav = styled(Link) ` 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  transition: font-size 0.3s;

  &:hover {
    font-size:18px
  }

  ${(props) => 
    props.$active && `background: rgb(0,0,0,0.2)`
  }
`

const LeftContainer = styled.div `
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 32px;
  }
`

export default function Header() {
  const location = useLocation()
  const history = useHistory()
  const userData = useSelector(store => store.users.userData)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setUserData(null))
    dispatch(setAuthTokenResponse(null))
    deleteAuthTokenFromLocalStorage()
    history.push('/')
  }

  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand as={Link} to='/'>大家的部落格</Brand>
        <NavbarList>
          <Nav to='/' $active={location.pathname === '/'} >首頁</Nav>
          <Nav to='/list' $active={location.pathname === '/list'} >文章列表</Nav>
          <Nav to='/about' $active={location.pathname === '/about'} >關於</Nav>
          { userData && <Nav to='/new-post' $active={location.pathname === '/new-post'}>發布文章</Nav> }
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        { !userData && <Nav to='/login' $active={location.pathname === '/login'}>登入</Nav> }
        { !userData && <Nav to='/register' $active={location.pathname === '/register'}>註冊</Nav> }
        { userData && <Nav onClick={handleLogout}>登出</Nav>}
      </NavbarList>
    </HeaderContainer>
  )
}
