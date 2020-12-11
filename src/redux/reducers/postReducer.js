import { createSlice } from '@reduxjs/toolkit';
import { getPostsById, getPosts, deletePostById, submitPost, patchPostById, getPostsByLimit } from '../../WebAPI'

export const postReducer = createSlice({
  name: 'posts',
  initialState: {
    isLoadingPost : false,
    isLoadingNewPost : false,
    isLoadingPatchedPost : false,
    post : [],
    posts : [],
    selectedPosts : [],
    newPostResponse : null,
    patchPostResponse : null,
  },
  reducers: {
    setIsLoadingPost: (state, action) => {
      state.isLoadingPost = action.payload
    },

    setIsLoadingNewPost: (state, action) => {
      state.isLoadingNewPost = action.payload
    },

    setIsLoadingPatchedPost: (state, action) => {
      state.isLoadingNewPost = action.payload
    },

    setPost: (state, action) => {
      state.post = action.payload
    },

    setPosts: (state, action) => {
      state.posts = action.payload
    },

    setSelectedPosts: (state, action) => {
      state.selectedPosts = action.payload
    },

    setNewPostResponse: (state, action) => {
      state.newPostResponse = action.payload
    },

    setPatchPostResponse: (state, action) => {
      state.patchPostResponse = action.payload
    }
  },
});

export const { 
  setIsLoadingPost, 
  setIsLoadingNewPost,
  setIsLoadingPatchedPost,
  setPost, 
  setPosts, 
  setSelectedPosts,
  setNewPostResponse,
  setPatchPostResponse
} = postReducer.actions;

//redux-thunk
export const getPost = (id) => (dispatch) => { 
  dispatch(setIsLoadingPost(true))
  getPostsById(id)
  .then(res => {
    dispatch(setPost(res))
    dispatch(setIsLoadingPost(false))
  })
  .catch(error => {
    console.log(error.toString())
  })
};

export const getAllPosts = () => (dispatch) => { 
  dispatch(setIsLoadingPost(true))
  getPosts()
  .then(res => {
    dispatch(setPosts(res))
    dispatch(setIsLoadingPost(false))
  })
  .catch(error => {
    console.log(error.toString())
  })
};

export const getSelectedPosts = (data) => (dispatch) => { 
  const limit = data.limit
  const page = data.page
  dispatch(setIsLoadingPost(true))
  getPostsByLimit(limit, page)
  .then(res => {
    dispatch(setSelectedPosts(res))
    dispatch(setIsLoadingPost(false))
  })
  .catch(error => {
    console.log(error.toString())
  })
};

export const deletePost = (event) => async (dispatch) => { 
  await deletePostById(event)
  .then(() => {
    console.lot('delete success')
  })
  .catch(error => {
    console.log(error.toString())
  })
  dispatch(setIsLoadingPost(true))
  getPosts()
  .then(res => {
    dispatch(setPosts(res))
    dispatch(setIsLoadingPost(false))
  })
  .catch(error => {
    console.log(error.toString())
  })
};

export const createPost = (data) => (dispatch) => {
  dispatch(setIsLoadingNewPost(true))
  return submitPost(data)
  .then(response => {
    dispatch(setNewPostResponse(response))
    dispatch(setIsLoadingNewPost(false))
    return response
  })
}

export const patchPost = (id, data) => (dispatch) => {
  dispatch(setIsLoadingPatchedPost(true))
  return patchPostById(id, data)
  .then(response => {
    dispatch(setPatchPostResponse(response))
    dispatch(setIsLoadingPatchedPost(false))
    return response
  })
}

export default postReducer.reducer; 
