import { getAuthTokenFromLocalStorage } from './utils'

const BASE_URL = 'https://student-json-api.lidemy.me'

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts?_sort=id&_order=desc`).then((res) => res.json())
}

export const getPostsById = (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`).then((res) => res.json())
}

export const getPostsByLimit = (limit, page) => {
  return fetch(`${BASE_URL}/posts?_limit=${limit}&_page=${page}&_sort=id&_order=desc`).then((res) => res.json())
}

export const login = (userData) => {
  const username = userData.username
  const password = userData.password
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
    })
  })
  .then(res => res.json())
}

export const register = (username, password, nickname) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      nickname,
      username,
      password
    })
  })
  .then(res => res.json())
}

export const getMe = (token) => {
  return fetch(`${BASE_URL}/me`, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
  .then(res => res.json())
}

export const submitPost = (data) => {
  const token = getAuthTokenFromLocalStorage()
  const title = data.title
  const body = data.body
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      title,
      body,
    })
  })
  .then(res => res.json())
}

export const deletePostById = (event) => {
  const id = Number(event.target.getAttribute('id'))
  const token = getAuthTokenFromLocalStorage()
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
  .then(res => res.json())
}

export const patchPostById = (id, data) => {
  const token = getAuthTokenFromLocalStorage()
  const title = data.title
  const body = data.body
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      title,
      body,
    })
  })
  .then(res => res.json())
}

