import { createSlice } from '@reduxjs/toolkit';
import { login, getMe } from '../../WebAPI'
import { deleteAuthTokenFromLocalStorage } from '../../utils'

export const userReducer = createSlice({
  name: 'users',
  initialState: {
    isLoadingAuthToken: false,
    authTokenResponse: null,
    userData: null,
  },
  reducers: {
    setIsLoadingAuthToken: (state, action) => {
      state.isLoadingAuthToken = action.payload
    },
    setAuthTokenResponse: (state, action) => {
      state.authTokenResponse = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    }
  },
});

export const { 
  setIsLoadingAuthToken,
  setAuthTokenResponse,
  setUserData
} = userReducer.actions;

//redux-thunk
export const getAuthToken = (loginData) => (dispatch) => { 
  dispatch(setIsLoadingAuthToken(true))
  return login(loginData)
  .then(response => {
    dispatch(setAuthTokenResponse(response))
    dispatch(setIsLoadingAuthToken(false))
    return response
  })
};

export const getUserData = (token) => (dispatch) => {
  return getMe(token)
  .then(response => {
    if(response.ok !== 1) {
      deleteAuthTokenFromLocalStorage()
      return response.message
    }
    dispatch(setUserData(response.data))
  })
}


export default userReducer.reducer; 
