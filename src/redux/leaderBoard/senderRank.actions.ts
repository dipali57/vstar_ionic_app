import { AppThunk, AppDispatch } from '../store';
import {
  getSenderRankFailed,
  getSenderRankRequest,
  getSenderRankSuccess,
} from './senderRank.slice';
import * as api from '../../api/leaderBoard.api';

export const getSenderRank = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getSenderRankRequest());
    await api
      .getSenderRank()
      .then((response) => dispatch(getSenderRankSuccess(response.data)))
      .catch(() =>
        dispatch(getSenderRankFailed('Error response from server!'))
      );
  } catch {
    dispatch(getSenderRankFailed('Failed to execute server call!'));
  }
};
