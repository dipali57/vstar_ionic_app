import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HashtagState } from "./types/HashtagState";
import { HashTag } from "../../api/types/Hashtag";

const initialState: HashtagState = {
  apiState: "initial",
  data: [],
  error: "",
};

export const hashtagSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getHashtagRequest(state) {
      state.apiState = "loading";
      state.data = [];
    },
    getHashtagSuccess(state, action: PayloadAction<HashTag[]>) {
      state.apiState = "loaded";
      state.data = action.payload;
    },
    getHashtagFailed(state, action: PayloadAction<string>) {
      state.apiState = "error";
      state.error = action.payload;
    },
  },
});

export const { getHashtagRequest, getHashtagSuccess, getHashtagFailed } =
  hashtagSlice.actions;

export const hashtagReducer = hashtagSlice.reducer;
