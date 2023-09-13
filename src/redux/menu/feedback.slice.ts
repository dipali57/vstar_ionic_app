import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FeedbackState } from "./types/FeedbackState";

const initialState: FeedbackState = {
  apiState: "initial",
  data: undefined,
  error: "",
};

export const feedbackSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    postFeedbackRequest(state) {
      state.apiState = "loading";
    },
    postFeedbackSuccess(state) {
      state.apiState = "loaded";
    },
    postFeedbackFailed(state, action: PayloadAction<string>) {
      state.apiState = "error";
      state.error = action.payload;
    },
  },
});

export const { postFeedbackRequest, postFeedbackSuccess, postFeedbackFailed } =
  feedbackSlice.actions;

export const feedbackReducer = feedbackSlice.reducer;
