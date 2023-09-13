import { combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { PostState } from './types/PostState';
import { selectStarOptionReducer } from './selectPostOption.slice';
import { postStarReducer } from './postStar.slice';
import { locationReducer } from './location.slice';

export const postReducerMap: ReducersMapObject<PostState> = {
  selectedStarOptions: selectStarOptionReducer,
  postStarState: postStarReducer,
  locationState: locationReducer,
};

export const postReducer: Reducer<PostState> =
  combineReducers<PostState>(postReducerMap);
