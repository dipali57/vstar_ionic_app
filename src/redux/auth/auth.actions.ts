import { AppDispatch, AppThunk } from '../store';
import * as userAuth from './../../api/userAuth.api';
import * as userProfile from './../../api/userProfiles.api';

import { UserProfile } from '../../api/types/UserProfile';
import {
  autoLoginUserFailed,
  autoLoginUserRequest,
  autoLoginUserSuccess,
  getUsersDetailFailed,
  getUsersDetailRequest,
  getUsersDetailSuccess,
  loginFailed,
  loginRequest,
} from './authorized.slice';
import { UserAuthRequest } from '../../api/types/UserAuthRequest';

const getUsersDetail =
  (params: Partial<UserProfile>): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(getUsersDetailRequest());
      await userProfile
        .getUserProfiles(params)
        .then((response) => dispatch(getUsersDetailSuccess(response.data)))
        .catch(() =>
          dispatch(getUsersDetailFailed('Error response from server!'))
        );
    } catch {
      dispatch(getUsersDetailFailed('Failed to execute server call!'));
    }
  };

export const login =
  (params: UserAuthRequest): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loginRequest());
      await userAuth
        .getAuthUser(params)
        .then((response) => {
          if (response.data.length === 0) {
            return dispatch(loginFailed('Please enter valid credentials'));
          }
          return dispatch(
            getUsersDetail({
              email: response.data[0].email,
              mpin: response.data[0].mpin,
            })
          );
        })
        .catch(() => dispatch(loginFailed('Error response from server!')));
    } catch {
      dispatch(loginFailed('Failed to execute server call!'));
    }
  };

export const autoLoginUser =
  (params: Partial<UserProfile>): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(autoLoginUserRequest());
      await userProfile
        .getUserProfiles(params)
        .then((response) => dispatch(autoLoginUserSuccess(response.data)))
        .catch(() =>
          dispatch(autoLoginUserFailed('Error response from server!'))
        );
    } catch {
      dispatch(autoLoginUserFailed('Failed to execute server call!'));
    }
  };
