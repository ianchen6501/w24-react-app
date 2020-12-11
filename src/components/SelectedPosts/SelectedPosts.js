import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedPosts } from '../../redux/reducers/postReducer'
import Post from './Post'
import Loading from "../Loading"
import { getPosts } from "../../WebAPI"

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

const PageControlerContainer = styled.ul `
  margin: 20px auto;
  width: 100px;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`

const Page = styled.li `
  font-size: 20px;
  cursor: pointer;
`

function PageControler({setCurrentPage, limit}) {
  const [paginateArray, setPaginateArray] = useState([])

  useEffect(() => {
    getPosts()
    .then(res => {
      const length = res.length
      const pagesNumber = length%limit? parseInt(length/limit)+1 : parseInt(length/limit)
      const array = []
      for(let i=1; i<=pagesNumber; i++) {
        array.push(i)
      }
      setPaginateArray(array)
    })
  }, [SelectedPosts])

  function handleSwitchPage(page) {
    setCurrentPage(page)
  }

  return (
    <PageControlerContainer>
        {
          paginateArray.map((page,index) => <Page onClick={() => handleSwitchPage(page)} key={index}>{page}</Page>)
        }
    </PageControlerContainer>
  )
}

export default function SelectedPosts() {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const selectedPosts = useSelector(store => store.posts.selectedPosts)
  const posts = useSelector(store => store.posts.posts)
  const limit = 8
  
  useEffect(() => {
    dispatch(getSelectedPosts({
      limit,
      page: currentPage,
    }))
  }, [dispatch, currentPage, posts])

  if(selectedPosts.length === 0){
    return ( 
      <Loading />
    )
  }

  return (
    <Container>
      <PostsContainer>
        { selectedPosts.map(post => 
          <Post post={post} key={post.id}></Post>)
        }
      </PostsContainer>
      <PageControler setCurrentPage={setCurrentPage} limit={limit}/>
    </Container>
  )
}

