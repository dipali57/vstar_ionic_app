import { combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AuthState } from './types/AuthState';
import { authorizedReducer } from './authorized.slice';

export const authReducerMap: ReducersMapObject<AuthState> = {
  authorizedUserData: authorizedReducer,
};

export const authReducer: Reducer<AuthState> =
  combineReducers<AuthState>(authReducerMap);
