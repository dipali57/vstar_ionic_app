import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserRankState } from './type/UserRankState';
import { UserRankType } from '../../api/types/UserRankType';

const initialState: UserRankState = {
  apiState: 'initial',
  data: [],
  error: '',
};

export const receiverRankSlice = createSlice({
  name: 'leader-board/receiver',
  initialState,
  reducers: {
    getReceiverRankRequest(state) {
      state.apiState = 'loading';
      state.data = [];
    },
    getReceiverRankSuccess(state, action: PayloadAction<Array<UserRankType>>) {
      state.apiState = 'loaded';
      state.data = action.payload;
    },
    getReceiverRankFailed(state, action: PayloadAction<string>) {
      state.apiState = 'error';
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const {
  getReceiverRankRequest,
  getReceiverRankSuccess,
  getReceiverRankFailed,
} = receiverRankSlice.actions;

export const receiverRankReducer = receiverRankSlice.reducer;
