import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SelectedStarOptionState } from './types/SelectedStarOptionState';
import { StarType } from '../../api/types/StarType';
import { UserProfile } from '../../api/types/UserProfile';

const initialState: SelectedStarOptionState = {
  selectedStarType: undefined,
  selectedUserProfiles: undefined,
};

export const selectStarOptionSlice = createSlice({
  name: 'stars/selectStar',
  initialState,
  reducers: {
    setStarTypeToInitial(state) {
      state.selectedStarType = undefined;
    },
    setUserProfileToInitial(state) {
      state.selectedUserProfiles = undefined;
    },
    setSelectedStarType(state, actions: PayloadAction<StarType>) {
      state.selectedStarType = actions.payload;
    },
    setSelectedUserProfile(state, actions: PayloadAction<UserProfile>) {
      state.selectedUserProfiles = actions.payload;
    },
  },
});

export const {
  setStarTypeToInitial,
  setUserProfileToInitial,
  setSelectedStarType,
  setSelectedUserProfile,
} = selectStarOptionSlice.actions;

export const selectStarOptionReducer = selectStarOptionSlice.reducer;
