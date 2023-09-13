import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LocationState } from './types/LocationState';
import { Location } from '../../api/types/Location';

const initialState: LocationState = {
  apiState: 'initial',
  data: {
    latitude: 0,
    longitude: 0,
    city: '',
    countryCode: '',
    principalSubdivision: '',
  },
  error: '',
};

export const locationSlice = createSlice({
  name: 'post/location',
  initialState,
  reducers: {
    getLocationRequest(state) {
      state.apiState = 'loading';
    },
    getLocationSuccess(state, action: PayloadAction<Location>) {
      state.apiState = 'loaded';
      state.data = action.payload;
    },
    getLocationFailed(state, action: PayloadAction<string>) {
      state.apiState = 'error';
      state.error = action.payload;
    },
  },
});

export const { getLocationRequest, getLocationSuccess, getLocationFailed } =
  locationSlice.actions;

export const locationReducer = locationSlice.reducer;
