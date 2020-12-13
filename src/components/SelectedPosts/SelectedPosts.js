import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedPosts } from '../../redux/reducers/postReducer'
import Post from '../../components/AllPosts/Post'
import Loading from '../Loading'
import { getPosts } from '../../WebAPI'
import { Container } from '../../components/AllPosts/AllPosts'
import PropTypes from 'prop-types'

const PageControlerContainer = styled.ul `
  margin: 20px auto;
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  text-align: center;
  padding: 0px;
`

const PagesContainer = styled.ul `
  transform: translate(0px, 4px);
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0px 10px;
`

const Page = styled.li `
  font-size: 20px;
  cursor: pointer;
  color: ${props => props.theme.primary_colors.black};
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  vertical-align: basement;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.$active && `
    border: solid 2px ${props.theme.primary_colors.black};
  `}
`

const Previous = styled.li `
  font-size: 40px;
  cursor: pointer;
  color: ${props => props.theme.primary_colors.black};
`

const Next = styled.li `
  font-size: 40px;
  cursor: pointer;
  color: ${props => props.theme.primary_colors.black};
`

function PageControler({setCurrentPage, currentPage, limit}) {
  const [paginateArray, setPaginateArray] = useState([])
  const [pagesNumber, setPagesNumber] = useState(null)

  useEffect(() => {
    getPosts()
    .then(res => {
      const length = res.length
      const pagesNumber = length%limit? parseInt(length/limit)+1 : parseInt(length/limit)
      setPagesNumber(pagesNumber)
      const array = []
      for(let i=1; i<=pagesNumber; i++) {
        array.push(i)
      }
      setPaginateArray(array)
    })
  }, [limit])

  function handleSwitchPage(page) {
    setCurrentPage(page)
  }

  function handlePrevious() {
    setCurrentPage(currentPage - 1)
  }

  function handleNext() {
    setCurrentPage(currentPage + 1)
  }

  return (
    <PageControlerContainer>
      { currentPage !== 1 && (
        <Previous onClick={handlePrevious}>&#x025C2;</Previous>
      )}
      <PagesContainer>
        {
          paginateArray.map((page,index) => <Page onClick={() => handleSwitchPage(page)} key={index} $active={currentPage === index + 1 }>{page}</Page>)
        }
      </PagesContainer>
      { currentPage !== pagesNumber && (
        <Next onClick={handleNext}>&#x025B8;</Next>
      )}
    </PageControlerContainer>
  )
}

PageControler.propTypes = {
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
  limit: PropTypes.number
}

export default function SelectedPosts() {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const selectedPosts = useSelector(store => store.posts.selectedPosts)
  const posts = useSelector(store => store.posts.posts)
  const limit = 5
  
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
      { selectedPosts.map(post => 
        <Post post={post} key={post.id}></Post>)
      }
      <PageControler setCurrentPage={setCurrentPage} currentPage={currentPage} limit={limit}/>
    </Container>
  )
}

