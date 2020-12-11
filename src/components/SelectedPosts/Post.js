import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../../redux/reducers/postReducer'

const PostContainer = styled.div `
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  &:hover {
    box-shadow: 0.5px 0.5px 2px 0px ;
  }
`

const PostTitle = styled(Link) `
  font-size: 24px;
  text-decoration: none;
  color: #333;
`

const PostDate = styled.div `
  color: rgba(0, 0, 0, 0.8);
`

const DeleteButton = styled.button `
  padding: 10px;
  margin-left: 20px;
  border: none;
`

const EditButton = styled.button `
  padding: 10px;
  margin-left: 20px;
  border: none;
`

const PostRightContainer = styled.div `
  display: flex;
`

export default function Post({post}) {
  const dispatch = useDispatch()
  const userData = useSelector(store => store.users.userData)

  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.id}{" . "}{post.title}</PostTitle>
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

