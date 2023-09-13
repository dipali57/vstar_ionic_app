import { combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { MenuState } from "./types/MenuState";
import { feedbackReducer } from "./feedback.slice";
import { hashtagReducer } from "./hashtag.slice";

export const menuReducerMap: ReducersMapObject<MenuState> = {
  feedback: feedbackReducer,
  hashtags: hashtagReducer,
};

export const menuReducer: Reducer<MenuState> =
  combineReducers<MenuState>(menuReducerMap);
