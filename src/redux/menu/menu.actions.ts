import { FeedbackRequest } from '../../api/types/FeedbackRequest';
import { AppThunk, AppDispatch } from '../store';
import * as api from './../../api/feedback.api';
import * as hashtagApi from './../../api/hashtag.api';
import {
  postFeedbackFailed,
  postFeedbackRequest,
  postFeedbackSuccess,
} from './feedback.slice';
import {
  getHashtagFailed,
  getHashtagRequest,
  getHashtagSuccess,
} from './hashtag.slice';

export const postFeedback =
  (params: FeedbackRequest): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(postFeedbackRequest());
      await api
        .postFeedback(params)
        .then(() => dispatch(postFeedbackSuccess()))
        .catch(() =>
          dispatch(postFeedbackFailed('Error response from server!'))
        );
    } catch {
      dispatch(postFeedbackFailed('Failed to execute server call!'));
    }
  };

export const getHashtags = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getHashtagRequest());
    await hashtagApi
      .getHashtags()
      .then((response) => dispatch(getHashtagSuccess(response.data)))
      .catch(() => dispatch(getHashtagFailed('Error response from server!')));
  } catch {
    dispatch(getHashtagFailed('Failed to execute server call!'));
  }
};
