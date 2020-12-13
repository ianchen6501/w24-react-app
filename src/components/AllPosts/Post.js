import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../../redux/reducers/postReducer'

const PostContainer = styled.div `
  position: relative;
  border-bottom: 1px solid ${props => props.theme.primary_colors.green};
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: ${props => props.theme.primary_colors.black};
  width: 80%;
  left: 50%;
  transform: translate(-50%, 0);
  transition: padding 0.3s;
  
  &:hover {
    padding: 16px 20px;
  }
`

const PostTitle = styled(Link) `
  font-size: 24px;
  text-decoration: none;
  color: ${props => props.theme.primary_colors.green};
`

const PostDate = styled.div `
  color: ${props => props.theme.primary_colors.green};
  font-weight: bold;
  display: flex;
  align-items: center;
`

const DeleteButton = styled.button `
  padding: 10px;
  margin-left: 20px;
  border: none;
  border-radius: 6px;
  background: ${props => props.theme.primary_colors.light_black};
  color:  ${props => props.theme.primary_colors.green};
  transform: background 0.1s, color 0.1s;

  &:hover {
    background: white;
    color: black;
  }
`

const EditButton = styled.button `
  padding: 10px;
  margin-left: 20px;
  border: none;
  border-radius: 6px;
  background: ${props => props.theme.primary_colors.light_black};
  color:  ${props => props.theme.primary_colors.green};
  transform: background 0.1s, color 0.1s;

  &:hover {
    background: white;
    color: black;
  }
`

const PostRightContainer = styled.div `
  display: flex;
`

export default function Post({post}) {
  const dispatch = useDispatch()
  const userData = useSelector(store => store.users.userData)

  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.id}{' . '}{post.title}</PostTitle>
      <PostRightContainer>
        <PostDate>{new Date(post.createdAt).toLocaleDateString()}</PostDate>
        { userData && <DeleteButton onClick={(event) => dispatch(deletePost(event)) } id={post.id}>Delete</DeleteButton> }
        { userData && <Link to={`/edit-post/${post.id}`}><EditButton>Edit</EditButton></Link> }
      </PostRightContainer>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

