import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../redux/reducers/postReducer'
import Post from './Post'
import Loading from "../Loading"

const Container = styled.div `
  position: relative;
  min-height: 100%
  box-sizing: border-box;
  padding-top: 64px;
  padding-bottom: 100px;
  z-index-1;
  width: 80%;
  margin: 0 auto;
`

const PostsContainer = styled.div `
  margin-top: 30px;
  outline: solid rgb(0,0,0,0.2) 0.5px;
`

export default function AllPosts() {
  const dispatch = useDispatch()
  const allPosts = useSelector(store => store.posts.posts)
  
  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  if(allPosts.length === 0){
    return ( 
      <Loading />
    )
  }

  return (
    <Container>
      <PostsContainer>
        { allPosts.map(post => 
          <Post post={post} key={post.id}></Post>)
        }
      </PostsContainer>
    </Container>
  )
}

