import axios, { AxiosResponse } from 'axios';
import { UserAuthRequest } from './types/UserAuthRequest';
import { AUTH_URL } from './constants/endpoint';
import { UserAuthResponse } from './types/UserAuthReponse';

export const getAuthUser = async (
  params?: UserAuthRequest
): Promise<AxiosResponse<UserAuthResponse, any>> => {
  return await axios.get(AUTH_URL, {
    headers: {
      Accept: 'application/json',
    },
    params,
  });
};
