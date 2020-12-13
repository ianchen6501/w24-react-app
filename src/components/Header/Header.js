import React from 'react'
import styled from 'styled-components'
import {
  Link,
  useLocation,
  useHistory
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setAuthTokenResponse, setUserData } from '../../redux/reducers/userReducer'
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
  padding: 0px, 30px;
  background: ${props => props.theme.primary_colors.black};
  box-shadow: 0.2px 0.2px 0.3px;
  z-index: 2;
`

const Brand = styled.div `
  margin-left: 20px;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.primary_colors.green};
`

const NavbarList = styled.div `
  display: flex;
  align-items: center;
`

const Nav = styled(Link) ` 
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;
  color: ${props => props.theme.primary_colors.green};
  font-weight: bold;
  text-decoration: none;
  transition: font-size 0.3s, background 0.3s;
  margin-right: 10px;

  &:hover {
    font-size:18px
  }

  ${(props) => 
    props.$active && `background: ${props.theme.primary_colors.light_black};`
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
        <Brand as={Link} to='/'>Blogger</Brand>
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
