import { AppThunk, AppDispatch } from '../store';
import {
  getReceiverRankRequest,
  getReceiverRankSuccess,
  getReceiverRankFailed,
} from './receiverRank.slice';
import * as api from '../../api/leaderBoard.api';

export const getReceiverRank =
  (): AppThunk => async (dispatch: AppDispatch) => {
    try {
      dispatch(getReceiverRankRequest());
      await api
        .getReceiverRank()
        .then((response) => dispatch(getReceiverRankSuccess(response.data)))
        .catch(() =>
          dispatch(getReceiverRankFailed('Error response from server!'))
        );
    } catch {
      dispatch(getReceiverRankFailed('Failed to execute server call!'));
    }
  };
