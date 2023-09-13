import { PostStarRequestType } from '../../api/types/PostStarRequestType';
import { AppDispatch, AppThunk } from '../store';
import * as api from '../../api/stars.api';
import * as geolocationApi from '../../api/geoLocation.api';
import {
  postStarFailed,
  postStarRequest,
  postStarSuccess,
} from './postStar.slice';
import { locationRequest } from '../../api/types/locationRequest';
import {
  getLocationFailed,
  getLocationRequest,
  getLocationSuccess,
} from './location.slice';

export const postStar =
  (params: PostStarRequestType): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(postStarRequest());
      await api
        .postStar(params)
        .then(() => dispatch(postStarSuccess()))
        .catch(() => dispatch(postStarFailed('Error response from server!')));
    } catch {
      dispatch(postStarFailed('Failed to execute server call!'));
    }
  };

export const getGeoLocation =
  (params: locationRequest): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(getLocationRequest());
      await geolocationApi
        .getGeoLocation(params)
        .then((response) => dispatch(getLocationSuccess(response.data)))
        .catch(() =>
          dispatch(getLocationFailed('Error response from server!'))
        );
    } catch {
      dispatch(getLocationFailed('Failed to execute server call!'));
    }
  };
