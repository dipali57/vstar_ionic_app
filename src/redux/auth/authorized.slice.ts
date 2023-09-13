import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthorizedUser } from './types/AuthorizedUser';
import { UserProfile } from '../../api/types/UserProfile';
import { store } from '../../utils/ClientStorage';

const initialState: AuthorizedUser = {
  apiState: 'initial',
  data: [],
  error: undefined,
};

export const authorizedSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.apiState = 'loading';
      state.data = [];
      state.error = undefined;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.apiState = 'error';
      state.error = action.payload;
      state.data = [];
    },
    getUsersDetailRequest(state) {
      state.apiState = 'loading';
      state.data = [];
      state.error = undefined;
    },
    getUsersDetailSuccess(state, action: PayloadAction<UserProfile[]>) {
      state.apiState = 'loaded';
      state.data = action.payload;
      state.error = undefined;
      store.set('email', action.payload[0].email);
    },
    getUsersDetailFailed(state, action: PayloadAction<string>) {
      state.apiState = 'error';
      state.error = action.payload;
      state.data = [];
    },
    autoLoginUserRequest(state) {
      state.apiState = 'loading';
      state.data = [];
      state.error = undefined;
    },
    autoLoginUserSuccess(state, action: PayloadAction<UserProfile[]>) {
      state.apiState = 'loaded';
      state.data = action.payload;
      state.error = undefined;
    },
    autoLoginUserFailed(state, action: PayloadAction<string>) {
      state.apiState = 'error';
      state.error = action.payload;
      state.data = [];
    },
    logout(state) {
      state.apiState = 'initial';
      state.data = [];
      state.error = undefined;
      store.remove('email');
    },
  },
});

export const {
  loginRequest,
  loginFailed,
  logout,
  getUsersDetailRequest,
  getUsersDetailSuccess,
  getUsersDetailFailed,
  autoLoginUserRequest,
  autoLoginUserSuccess,
  autoLoginUserFailed,
} = authorizedSlice.actions;

export const authorizedReducer = authorizedSlice.reducer;
