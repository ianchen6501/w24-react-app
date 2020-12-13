import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../redux/reducers/postReducer'
import Post from './Post'
import Loading from '../Loading'

export const Container = styled.div `
  position: relative;
  background: ${props => props.theme.primary_colors.green};
  min-height: 100%;
  z-index: 1;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 30px;
  padding-bottom: 80px;

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
        { allPosts.map(post => 
          <Post post={post} key={post.id}></Post>)
        }
    </Container>
  )
}

