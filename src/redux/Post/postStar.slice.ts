import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PostStarState } from './types/PostStarState';

const initialState: PostStarState = {
  apiState: 'initial',
  data: '',
  error: '',
};

export const postStarSlice = createSlice({
  name: 'post/stars',
  initialState,
  reducers: {
    postStarRequest(state) {
      state.apiState = 'loading';
    },
    postStarSuccess(state) {
      state.apiState = 'loaded';
    },
    postStarFailed(state, action: PayloadAction<string>) {
      state.apiState = 'error';
      state.error = action.payload;
    },
  },
});

export const { postStarRequest, postStarSuccess, postStarFailed } =
  postStarSlice.actions;

export const postStarReducer = postStarSlice.reducer;
