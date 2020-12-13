import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { getPost, setPost } from '../../redux/reducers/postReducer'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { Link } from 'react-router-dom'


NewPostPage.propTypes = {
  post: PropTypes.object
}

const SinglePostContainer = styled.div `
  height: 100%;
  box-sizing: border-box;
  padding-top: 64px;
  padding-bottom: 50px;
  width: 70vw;
  margin: 0 auto;
`

const TitleContainer = styled.div `
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

const TitleRightContainer = styled.div `
  display: flex;
`

const Title = styled.div `
  font-weight: bold;
  font-size: 26px;
  vertical-align: baseline;
`

const CreatedAt = styled.div `
  font-size: 20px;
  color: rgb(0,0,0,0.6);
  display: flex;
  align-items: center;
`

const Body = styled.div `
  margin-top: 10px;
  padding-top: 20px;
  border-top: solid 0.5px rgb(0,0,0,0.3);
  font-size:26px;
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

export default function NewPostPage() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const post = useSelector(store => store.posts.post)
  const userData = useSelector(store => store.users.userData)

  useEffect(() => {
    dispatch(getPost(id))
    return () => {dispatch(setPost([]))}
  }, [id, dispatch]) //dispatch 重新 run 時 re-render

  if(post.length === 0) {
    return (
      <Loading />
    )
  }

  return (
    <SinglePostContainer>
      <TitleContainer>
        <Title>{post[0].title}</Title>
        <TitleRightContainer>
          <CreatedAt>{new Date(post[0].createdAt).toLocaleTimeString()}</CreatedAt>
          { userData && <Link to={`/edit-post/${id}`}><EditButton>Edit</EditButton></Link> }
        </TitleRightContainer>
      </TitleContainer>
      <Body>{post[0].body}</Body>
    </SinglePostContainer>
  )
}
