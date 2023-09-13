import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserRankState } from './type/UserRankState';
import { UserRankType } from '../../api/types/UserRankType';

const initialState: UserRankState = {
  apiState: 'initial',
  data: [],
  error: '',
};

export const senderRankSlice = createSlice({
  name: 'leader-board/sender',
  initialState,
  reducers: {
    getSenderRankRequest(state) {
      state.apiState = 'loading';
      state.data = [];
    },
    getSenderRankSuccess(state, action: PayloadAction<Array<UserRankType>>) {
      state.apiState = 'loaded';
      state.data = action.payload;
    },
    getSenderRankFailed(state, action: PayloadAction<string>) {
      state.apiState = 'error';
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const {
  getSenderRankRequest,
  getSenderRankSuccess,
  getSenderRankFailed,
} = senderRankSlice.actions;

export const senderRankReducer = senderRankSlice.reducer;
