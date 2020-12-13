import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../redux/reducers/postReducer'
import { useDispatch, useSelector } from 'react-redux'
import usePrevious from '../../hook'
import {
  NewPostContainer,
  Section,
  Input,
  Textarea,
  Button,
  ErrorMessage
} from '../../components/Form'

export default function NewPostPage() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoadingNewPost = useSelector(store => store.posts.isLoadingNewPost)
  const newPostResponse = useSelector(store => store.posts.newPostResponse)
  const prevIsLoadingNewPost = usePrevious(isLoadingNewPost)

  function handleSubmit() {
    if(title === '' || body === '') {
      return setErrorMessage('請輸入資料')
    }
    dispatch(createPost({title, body})) //return promise
  }

  // 1. request 之前，isLoadingNewPost: false , prevIsLoadingNewPost: false
  // 2. request 時，isLoadingNewPost: true , prevIsLoadingNewPost: false
  // 3. request 後，isLoadingNewPost: false , prevIsLoadingNewPost: true

  useEffect(() => { //方法三，用 state 來判斷
    if(!isLoadingNewPost && prevIsLoadingNewPost)
    if(newPostResponse && newPostResponse.id) {
      history.push('./posts/'+ newPostResponse.id)
    }
  }, [newPostResponse, history, isLoadingNewPost, prevIsLoadingNewPost])

  // useEffect(() => { //方法一，再下一次進來前清空 newpostresponse
  //   return dispatch(setNewPostResponse(null))
  // }, [])

  // useEffect(() => { //會有一個 side effect 之後進來 newPostResponse 還在，會導向該文章
  //   if(newPostResponse && newPostResponse.id) {
  //     history.push('./posts/'+ newPostResponse.id)
  //   }
  // }, [newPostResponse, history])

  return (
    <NewPostContainer>
      <Section>
        <h2>Title</h2>
        <Input value={title} onChange={(event) => {setTitle(event.target.value)}}></Input>
      </Section>
      <Section>
        <h2>Body</h2>
        <Textarea value={body} onChange={(event) => {setBody(event.target.value)}} rows='4'></Textarea>
      </Section>
      <Button onClick={handleSubmit}>Submit</Button>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </NewPostContainer>
  )
}
