import { combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { senderRankReducer } from './senderRank.slice';
import { LeaderBoardState } from './type/LeaderBoardState';
import { receiverRankReducer } from './receiverRank.slice';

export const leaderBoardReducerMap: ReducersMapObject<LeaderBoardState> = {
  sender: senderRankReducer,
  receiver: receiverRankReducer,
};

export const leaderBoardReducer: Reducer<LeaderBoardState> =
  combineReducers<LeaderBoardState>(leaderBoardReducerMap);
