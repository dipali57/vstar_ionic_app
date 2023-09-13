import axios, { AxiosResponse } from 'axios';
import { USER_PROFILES_URL } from './constants/endpoint';
import { UserProfile } from './types/UserProfile';

export const getUserProfiles = async (
  params?: Partial<UserProfile>
): Promise<AxiosResponse<UserProfile[], any>> => {
  return await axios.get<Array<UserProfile>>(USER_PROFILES_URL, {
    headers: {
      Accept: 'application/json',
    },
    params,
  });
};
