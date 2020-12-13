import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { patchPost, getPost } from '../../redux/reducers/postReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../../redux/reducers/postReducer'
import {
  NewPostContainer,
  Section,
  Input,
  Textarea,
  Button,
  ErrorMessage
} from '../../components/Form'
import Loading from '../../components/Loading'

export default function EditPostPage() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const {id} = useParams()
  const post = useSelector(store => store.posts.post)

  function handleSubmit() {
    if(title === '' || body === '') {
      return setErrorMessage('請輸入資料')
    }
    dispatch(patchPost(id, {title, body})) //return promise
    .then(response => {
      if(response.ok !== 1) {
        setErrorMessage(response.message)
      }
      history.goBack()
    })
  }

  useEffect(() => {
    dispatch(getPost(id))
    return () => {dispatch(setPost([]))}
  }, [id, dispatch])

  if(post.length === 0) {
    return <Loading />
  }

  return (
    <NewPostContainer>
      <Section>
        <h2>主題</h2>
        <Input value={title} onChange={(event) => {setTitle(event.target.value)}} placeholder={post.length !== 0 ? post[0].title : ''}></Input>
      </Section>
      <Section>
        <h2>內容</h2>
        <Textarea value={body} onChange={(event) => {setBody(event.target.value)}} placeholder={post.length !== 0 ? post[0].body : ''} rows='4'></Textarea>
      </Section>
      <Button onClick={handleSubmit}>Submit</Button>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </NewPostContainer>
  )
}
